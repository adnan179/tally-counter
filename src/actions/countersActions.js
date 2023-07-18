export const addCounter = (counter) => {
  const uniqueId = Date.now().toString();
  return {
    type: "ADD_COUNTER",
    payload: { ...counter, id: uniqueId },
  };
};

export const deleteCounter = (counterId) => ({
  type: "DELETE_COUNTER",
  payload: counterId,
});
