// src/components/CounterList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCounter } from "../actions/countersActions";
import Counter from "./counter";

const CounterList = () => {
  const counters = useSelector((state) => Object.values(state.counters));
  const dispatch = useDispatch();

  const handleDelete = (counterId) => {
    // Allow deletion only if there are more than one counters
    if (counters.length > 1) {
      dispatch(deleteCounter(counterId));
    }
  };

  return (
    <div>
      {counters.map((counter) => (
        <div key={counter.id}>
          <Counter counterId={counter.id} />
          {counter.id !== "permanent" && (
            <button onClick={() => handleDelete(counter.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CounterList;
