import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../store/actions";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Pagination from "./Pagination";
import CARD from "./Cards";
/* <------------------------------> */
function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  // const allTemps = useSelector((state) => state.dogs);
  //<------------PAGINATION------------------>
  const [currentPage, setCurrentPage] = useState(1);
  const [dogPerPage, setDogPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogPerPage;
  const indexOfFirstDog = indexOfLastDog - dogPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const PAGINATION = (pageNum) => {
    if (pageNum !== 1) {
      setDogPerPage(9);
      setCurrentPage(pageNum);
    } else {
      setDogPerPage(10);
      setCurrentPage(pageNum);
    }
  };
  //<------------PAGINATION------------------>
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }
  return (
    <Divino>
      <Divo>
        <button>
          <Link to="/create">Create a breed</Link>
        </button>
        <button onClick={(event) => handleClick(event)}>Clear filters</button>
        <SearchBar />
        <label>Sort by name</label>
        <select name="Sort by" id="A-Z">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </select>
        <label>Sort by weight</label>
        <select name="Sort by" id="weight">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </select>
        <label>Sort by height</label>
        <select name="Sort by" id="height">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </select>
        <label htmlFor="">¿Display created breeds?</label>
        <select name="By created" id="Created">
          <option value="CRE">Show made-ups</option>
          <option value="ONL">Only show made-ups</option>
          <option value="NOT">Don't show made-ups</option>
        </select>
        <label htmlFor="">Show by temperament</label>
        <select name="By temps" id="temps">
          <option value="TEMP">placeholder </option>
        </select>
        <Pagination
          dogsPerPage={dogPerPage}
          allDogs={allDogs.length}
          pagination={PAGINATION}
        />
      </Divo>
      {currentDogs?.map((dogs) => {
        return (
          <Link to={"/dogs/" + dogs.id}>
            <CARD
              image={dogs.image}
              name={dogs.name}
              temperament={dogs.temperament}
              weight={dogs.weight}
              key={dogs.id}
            />
          </Link>
        );
      })}
    </Divino>
  );
}
export default Home;
const Divo = styled.nav`
  font-size: 1.2rem;
  background-color: rgba(28, 27, 27, 0.74);
  box-shadow: 0px 1px 18px 5px rgba(121, 255, 244, 0.76),
    0px 1px 5px 4px rgba(121, 255, 185, 0.85) inset;
  object-position: center;
  width: 90vw;
  height: 8em;
  margin-left: 12%;
`;
const Divino = styled.div`
  align-content: center;
  position: relative;
  display: block;
  column-count: 3;
`;
