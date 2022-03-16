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
    case "CREATE_DOG":
      return {
        ...state,
      };
    case "SORT_DOGS": {
      let { sortParam, sortDirection } = action.payload,
        sortedDogs;
      if (sortParam === "name")
        sortedDogs = sortDogsName(sortDirection, [...state.dogs]);
      if (sortParam === "weight")
        sortedDogs = sortDogsWeight(sortDirection, [...state.dogs]);
      return {
        ...state,
        dogs: sortedDogs,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
