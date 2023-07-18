// src/reducers/countersReducer.js
const initialState = [{ id: "permanent", name: "Permanent Counter", value: 0 }];

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.id === action.payload) {
        return { ...state, value: state.value + 1 };
      }
      return state;
    case "DECREMENT":
      if (state.id === action.payload) {
        return { ...state, value: state.value - 1 };
      }
      return state;
    case "SET_VALUE":
      if (state.id === action.payload.counterId) {
        return { ...state, value: action.payload.value };
      }
      return state;
    case "RESET":
      if (state.id === action.payload) {
        return { ...state, value: 0 };
      }
      return state;
    default:
      return state;
  }
};

const countersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, action.payload];
    case "DELETE_COUNTER":
      return state.filter((counter) => counter.id !== action.payload);
    case "INCREMENT":
    case "DECREMENT":
    case "SET_VALUE":
    case "RESET":
      return state.map((counter) => counterReducer(counter, action));
    default:
      return state;
  }
};

export default countersReducer;
