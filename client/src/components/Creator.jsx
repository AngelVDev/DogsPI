import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDogs, getDogs } from "../store/actions";
import { DetailedCard } from "./Detail";
import { Button } from "./Landing";
// import { Select } from "./Home";

const Creator = () => {
  let dispatch = useDispatch();
  let [error, setError] = useState({});
  let [input, setInput] = useState({
    name: "",
    lifespan: "",
    height: "",
    weight: "",
    image: "",
    temperaments: "",
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

  let handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("EVIDENCIA", e);
    dispatch(createDogs(input));
    setInput({
      name: "",
      height: "",
      weight: "",
      lifespan: "",
      temperaments: "",
      image:
        "https://www.meme-arsenal.com/memes/55390bf6056849e080242923f38bb394.jpg",
    });
    alert("¡Successful creation!");
  };
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <DetailedCard>
      <h1>Create a breed</h1>
      <nav>
        <Link to="/home">
          <Button>To home</Button>
        </Link>
      </nav>
      <form onSubmit={handleOnSubmit}>
        <div>
          <div>
            <label>
              Breed:
              <input
                type="text"
                placeholder="Breed name"
                value={input.name}
                name="name"
                onChange={(e) => handleOnChange(e)}
              />
              {error.name && <p>{error.name}</p>}
            </label>
          </div>
          <div>
            <label>
              Height:
              <input
                type="text"
                placeholder="Breed height"
                value={input.height}
                name="height"
                onChange={(e) => handleOnChange(e)}
              />
              {error.height && <p className="error">{error.height}</p>}
            </label>
          </div>
          <div>
            <label>
              Weight:
              <input
                type="text"
                placeholder="Breed weight"
                value={input.weight}
                name="weight"
                onChange={(e) => handleOnChange(e)}
              />
              {error.weight && <p>{error.weight}</p>}
            </label>
          </div>
          <div>
            <label>
              Lifespan:
              <input
                type="text"
                placeholder="Breed lifespan"
                value={input.lifespan}
                name="lifespan"
                onChange={(e) => handleOnChange(e)}
              />
              {error.lifespan && <p>{error.lifespan}</p>}
            </label>
          </div>
          <div>
            <label>
              Temperaments:
              <input
                type="text"
                value={input.temperaments}
                name="temperaments"
                placeholder="Breed temperament"
                onChange={(e) => handleOnChange(e)}
              />
            </label>
          </div>
          <div>
            <button>CREATE</button>
          </div>
        </div>
      </form>
    </DetailedCard>
  );
};

export default Creator;
