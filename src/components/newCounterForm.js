import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCounter } from "../actions/countersActions";

const NewCounterForm = () => {
  const [counterName, setCounterName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const counter = { name: counterName, value: 0 };
    dispatch(addCounter(counter));
    setCounterName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={counterName}
        onChange={(e) => setCounterName(e.target.value)}
        placeholder="Counter Name"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewCounterForm;
