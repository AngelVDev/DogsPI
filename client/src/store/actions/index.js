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
      const response = await axios.get(URL + "dogs/" + id);
      let json = response.data;
      dispatch({ type: "GET_DETAILS", payload: json });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getDogQuery(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(URL + "dogs?name=" + name);
      let json = response.data;
      dispatch({ type: "GET_QUERY", payload: json });
    } catch (err) {
      console.log(err);
    }
  };
}
export let createDogs = (payload) => {
  console.log("Soy un peiloud", payload);
  return async (dispatch) => {
    try {
      let newDogs = await axios.post(`${URL}dogs`, payload);
      return dispatch({
        type: "CREATE_DOG",
        payload: newDogs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export let orderByName = (payload) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "FILTER_NAME",
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export let orderByWeight = (payload) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "FILTER_WEIGHT",
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export let searchChoco = (payload) => {
//   const response = await axios.get(URL + "dogs?name=" + query);
//   let json = response.data;
// };
