import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs, getTemps } from "../store/actions";
import { orderByName, orderByWeight } from "../store/actions";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Pagination from "./Pagination";
import CARD from "./Cards";

/* <------------------------------> */
function Home() {
  const temperaments = useSelector((state) => state.temperament);
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.filteredChocos);
  // const allTemps = useSelector((state) => state.dogs);

  //<------------PAGINATION------------------>
  const [currentPage, setCurrentPage] = useState(1);
  const [dogPerPage, setDogPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogPerPage;
  const indexOfFirstDog = indexOfLastDog - dogPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const loading = useSelector((state) => state.loading);
  const [order, setOrder] = useState("");

  const PAGINATION = (pageNum) => {
    setCurrentPage(pageNum);
  };
  //<------------PAGINATION------------------>
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }
  let handleName = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByName(e.target.value));
    setOrder(e.target.value);
  };
  let handleWeight = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderByWeight(e.target.value));
    setOrder(e.target.value);
  };
  return (
    <div>
      <Divo>
        <button>
          <Link to="/create">Create a breed</Link>
        </button>
        <button onClick={(event) => handleClick(event)}>Clear filters</button>
        <SearchBar />
        <Pagination
          dogPerPage={dogPerPage}
          allDogs={allDogs.length}
          pagination={PAGINATION}
        />
        <label>Sort by name</label>
        <Select onChange={(e) => handleName(e)} id="A-Z">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </Select>
        <label>Sort by weight</label>
        <Select onChange={(e) => handleWeight(e)} id="weight">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </Select>
        {/* <label htmlFor="">¿Display created breeds?</label>
        <Select name="By created" id="Created">
          <option value="CRE">Show made-ups</option>
          <option value="ONL">Only show made-ups</option>
          <option value="NOT">Don't show made-ups</option>
        </Select> */}
        <label htmlFor="">Show by temperament</label>
        <Select name="By temps" id="temps"></Select>
      </Divo>
      <Divertido>
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
      </Divertido>
    </div>
  );
}

const Divo = styled.nav`
  font-size: 1.2rem;
  background-color: rgba(28, 27, 27, 0.74);
  box-shadow: 0px 1px 18px 5px rgba(121, 255, 244, 0.76),
    0px 1px 5px 4px rgba(121, 255, 185, 0.85) inset;
  width: 90%;
  margin-left: 10%;
  height: 8em;
`;
const Divertido = styled.div`
  display: flex;
  grid-template-columns: 1fr;
`;

export const Select = styled.select`
  background-color: #e26c6c;
  color: white;
  outline: 2px dashed #ffb12e;
  outline-offset: 2px;
  font-family: "Alegreya Sans SC";
  font-weight: bold;
`;

export default Home;
