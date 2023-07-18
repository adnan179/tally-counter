import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterList from "./components/counterList";
import NewCounterForm from "./components/newCounterForm";
import { auth, signIn } from "./firebase";

const App = () => {
  const counters = useSelector((state) => state.counters);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    setLoading(false);
  });

  return (
    <div>
      <h1>Tally Counter App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p>Welcome, {user.email}</p>
          {Object.keys(counters).length > 0 ? (
            <CounterList />
          ) : (
            <p>No counters available. Add a counter using the form below.</p>
          )}
          <NewCounterForm />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
