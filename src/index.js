import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import App from "./App";
import counterReducer from "./reducers/counter";
import countersReducer from "./reducers/counters";

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  counters: countersReducer,
});

// Create Redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
