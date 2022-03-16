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
export let createDogs = (payload) => {
  return async (dispatch) => {
    try {
      let newDogs = await axios.post(`${URL}/dogs`, payload);
      return dispatch({
        type: "CREATE_DOG",
        payload: newDogs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export let sortDogsName = (sortDirection, dogs) => {
  return sortDirection // Si es true ordena ascendentemente
    ? dogs.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      })
    : dogs.sort((a, b) => {
        if (a.name < b.name) return 1;
        else if (a.name > b.name) return -1;
        else return 0;
      });
};
export let sortDogsWeight = (sortDirection, dogs) => {
  return sortDirection // Si es true ordena ascendentemente
    ? dogs.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      })
    : dogs.sort((a, b) => {
        if (a.name < b.name) return 1;
        else if (a.name > b.name) return -1;
        else return 0;
      });
};
export let sortDogsHeight = (sortDirection, dogs) => {
  return sortDirection // Si es true ordena ascendentemente
    ? dogs.sort((a, b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        else return 0;
      })
    : dogs.sort((a, b) => {
        if (a.name < b.name) return 1;
        else if (a.name > b.name) return -1;
        else return 0;
      });
};
export function getTemps() {
  return async function (dispatch) {
    const response = await axios.get(URL + "temperaments");
    try {
      let json = response.data;
      dispatch({ type: "GET_TEMPS", payload: json });
    } catch (err) {
      return console.log("éste es el error", err);
    }
  };
}
