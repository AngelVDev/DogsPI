import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../store/actions";
import { Link } from "react-router-dom";
import Card from "./Cards";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }
  return (
    <div>
      <button>
        <Link to="/create">Create a breed</Link>
      </button>
      <SearchBar />
      <button onClick={(event) => handleClick(event)}>Clear filters</button>
      <div>
        <select name="Sort by" id="A-Z">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </select>
        <select name="By created" id="Created">
          <option value="CRE"></option>
        </select>
        <select name="By temperament" id="Temps">
          <option value="TEMP"></option>
        </select>
        {allDogs?.map((d) => {
          return (
            <>
              <Link to={"/dogs/" + d.id}>
                <Card
                  name={d.name}
                  image={d.image}
                  temperament={d.temperament}
                  weightmin={d.weMi}
                  weightmax={d.weMa}
                  key={d.id}
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
