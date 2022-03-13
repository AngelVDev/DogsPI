import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDogs, getDogs } from "../store/actions";
// import { Select } from "./Home";

const Creator = () => {
  let dispatch = useDispatch();
  let { temperaments } = useSelector((state) => state);
  let [error, setError] = useState({});
  let [input, setInput] = useState({
    name: "",
    lifespan: "",
    height: "",
    weight: "",
    image: "",
    temperaments: [],
  });

  let validate = () => {
    let error = {};
    if (!input.name) {
      error.name = "Name required";
    } else if (!input.weight) {
      error.weight = "Tell us the weight, please";
    } else if (!input.height) {
      error.height = "Tell us the height, please";
    } else if (!input.lifespan) {
      error.lifespan = "Tell us the average lifespan, please";
    } else if (!input.temperaments) {
      error.season = "Select temperaments";
    }
    return error;
  };

  let handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  let handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        dogs: [...input.dogs, e.target.value],
      });
    }
  };
  let handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createDogs(input));
    setInput({
      name: "",
      height: "",
      weight: "",
      lifespan: "",
      temperaments: [],
      image: "",
    });
    alert("¡Successful creation!");
  };
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <h1>Create a breed</h1>
      <nav>
        <Link to="/dogs">
          <button>To home</button>
        </Link>
      </nav>
      <form onSubmit={handleOnSubmit}>
        <div>
          <div>
            <label>Breed:</label>
            <input
              type="text"
              placeholder="Breed name"
              value={input.name}
              name="name"
              onChange={(e) => handleOnChange(e)}
            />
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <label>Height:</label>
            <input
              type="text"
              placeholder="Breed height"
              value={input.height}
              height="height"
              onChange={(e) => handleOnChange(e)}
            />
            {error.height && <p className="error">{error.height}</p>}
          </div>
          <div>
            <label>Weight:</label>
            <input
              type="text"
              placeholder="Breed weight"
              value={input.weight}
              weight="weight"
              onChange={(e) => handleOnChange(e)}
            />
            {error.weight && <p>{error.weight}</p>}
          </div>
          <div>
            <label>Lifespan:</label>
            <input
              type="text"
              placeholder="Breed lifespan"
              value={input.lifespan}
              lifespan="lifespan"
              onChange={(e) => handleOnChange(e)}
            />
            {error.lifespan && <p>{error.lifespan}</p>}
          </div>
          <div>
            <label>Temperaments:</label>
            <div>
              {temperaments &&
                temperaments.map((c) => {
                  return (
                    <div key={c.id}>
                      <label>{c.name}</label>
                      <input
                        type="checkbox"
                        value={c.name}
                        onChange={(e) => handleCheckbox(e)}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default Creator;
