import axios from "axios";
const URL = "http://localhost:3001/";

export function getDogs() {
  return async function (dispatch) {
    const response = await axios.get(URL + "dogs");
    try {
      let json = response.data;
      dispatch({ type: "GET_DOGS", payload: json });
    } catch (err) {
      return console.log("éste es el error", err);
    }
  };
}
export function getDogDetail(id) {
  return function (dispatch) {
    return axios
      .get(`${URL}dogs/${id}`)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: "GET_DETAILS", payload: json });
      });
  };
}
