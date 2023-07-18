// src/actions/counterActions.js
export const increment = (counterId) => ({
  type: "INCREMENT",
  payload: counterId,
});

export const decrement = (counterId) => ({
  type: "DECREMENT",
  payload: counterId,
});

export const setValue = (counterId, value) => ({
  type: "SET_VALUE",
  payload: { counterId, value },
});

export const reset = (counterId) => ({
  type: "RESET",
  payload: counterId,
});
