const initialState = {
  dogs: [],
  filteredChocos: [],
  dogsDetail: {},
  loadedPichicho: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        filteredChocos: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        dogsDetail: action.payload,
      };
    case "GET_QUERY":
      return {
        ...state,
        filteredChocos: [action.payload],
      };
    case "CREATE_DOG":
      return {
        ...state,
      };
    case "FILTER_NAME":
      const sorted =
        action.payload === "ASC"
          ? state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filteredChocos: sorted,
      };
    case "FILTER_WEIGHT":
      const sortWeight =
        action.payload === "ASC"
          ? state.dogs.sort((a, b) => {
              if (a.weight.split("-")[1] > b.weight.split("-")[1]) {
                return 1;
              }
              if (b.weight.split("-")[1] > a.weight.split("-")[1]) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.weight.split("-")[1] > b.weight.split("-")[1]) {
                return -1;
              }
              if (a.weight.split("-")[1] > b.weight.split("-")[1]) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filteredChocos: sortWeight,
      };
    default:
      return state;
  }
}

export default rootReducer;
