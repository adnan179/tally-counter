// src/components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  setValue,
  reset,
} from "../actions/counterActions";

const Counter = ({ counterId }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) =>
    state.counters.find((counter) => counter.id === counterId)
  );

  const handleIncrement = () => {
    dispatch(increment(counterId));
  };

  const handleDecrement = () => {
    dispatch(decrement(counterId));
  };

  const handleSetValue = () => {
    const inputValue = parseInt(prompt("Enter a value:"));
    if (!isNaN(inputValue)) {
      dispatch(setValue(counterId, inputValue));
    }
  };

  const handleReset = () => {
    dispatch(reset(counterId));
  };

  return (
    <div>
      <h3>Counter: {counter.value}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
