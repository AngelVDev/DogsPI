import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../store/actions";
import { Link } from "react-router-dom";
import Card from "./Cards";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Pagination from "./Pagination";
/* <------------------------------> */
function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogPerPage, setDogPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogPerPage;
  const indexOfFirstDog = indexOfLastDog - dogPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const PAGINATION = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }
  return (
    <div>
      <Divo>
        <button>
          <Link to="/create">Create a breed</Link>
        </button>
        <button onClick={(event) => handleClick(event)}>Clear filters</button>
        <SearchBar />
      </Divo>

      <select name="Sort by" id="A-Z">
        <option value="ASC">Asc</option>
        <option value="DES">Desc</option>
      </select>
      <select name="By created" id="Created">
        <option value="CRE">Show made-ups</option>
        <option value="ONL">Only show made-ups</option>
        <option value="NOT">Don't show made-ups</option>
      </select>
      <select name="By temps" id="temps">
        <option value="*"> </option>
      </select>
      {allDogs.map((dogs) => {
        return (
          <Link to={"/dogs/" + dogs.id}>
            <div>
              <Card
                image={dogs.image}
                name={dogs.name}
                temperament={dogs.temperament}
                weight={dogs.weight}
                key={dogs.id}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default Home;
const Divo = styled.div`
  font-size: 1.2rem;
  display: block;
  background-color: rgba(28, 27, 27, 0.74);
  box-shadow: 0px 1px 18px 5px rgba(121, 255, 244, 0.76),
    0px 1px 5px 4px rgba(121, 255, 185, 0.85) inset;
  justify: center;
  width: 160%;
  height: 1.5rem;
  margin: 0.6rem;
  padding: 2em;
  &:visited {
    color: #ffab4b;
  }
`;
