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
  return async function (dispatch) {
    try {
      const response = await axios.get(`/dogs/${id}`);
      let json = response.data;
      dispatch({ type: "GET_DETAILS", payload: json });
    } catch (err) {
      console.log(err);
    }
  };
}
