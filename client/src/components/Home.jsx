import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../store/actions";
import { Link } from "react-router-dom";
import Card from "./Cards";

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
      <Link to="/dogs">Create a breed</Link>
      <button onClick={(event) => handleClick(event)}>Clear filters</button>
      <div>
        <select name="" id="">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </select>
        <select name="" id="">
          <option value="CRE"></option>
        </select>
        <select name="" id="">
          <option value="TEMP"></option>
        </select>
        {allDogs?.map((d) => {
          return (
            <>
              <Link to={"/home/" + d.id}>
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
