const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "RESET":
      return { ...state, value: 0 };
    default:
      return state;
  }
};

export default counterReducer;
