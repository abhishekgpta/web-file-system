export const addEntry = entry => {
  return {
    type: "ADD_DATA",
    payload: entry
  };
};

export const deleteEntry = entry => {
  return {
    type: "DELETE_DATA",
    payload: entry
  };
};
