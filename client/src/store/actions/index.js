import axios from "axios";
// const URL = "https://localhost:3001/";

export function getDogs() {
  return function (dispatch) {
    return axios
      .get("https://localhost:3001/dogs")
      .then((response) => response.date)
      .then((json) => {
        dispatch({ type: "GET_DOGS", payload: json });
      });
  };
}
