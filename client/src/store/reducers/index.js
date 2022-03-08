const initialState = {
  dogs: [],
  dogsDetail: {},
  loadedPichicho: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        dogsDetail: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;