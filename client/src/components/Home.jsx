import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../store/actions";
import { Link } from "react-router-dom";
import Card from "./Cards";
import SearchBar from "./SearchBar";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  // const [dogs, setDogs] = useState({});
  // const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }
  // const onChangePage = (next) => {
  //   if (!dogs.previous && page + next <= 0) return;
  //   if (!dogs.next && page + next >= 9) return;
  //   setPage(page + next);
  // };
  return (
    <div>
      <div>
        <button>
          <Link to="/create">Create a breed</Link>
        </button>
        <SearchBar />
        <button onClick={(event) => handleClick(event)}>Clear filters</button>
      </div>
      <div>
        <select name="Sort by" id="A-Z">
          <option value="ASC">Asc</option>
          <option value="DES">Desc</option>
        </select>
        <select name="By created" id="Created">
          <option value="CRE">Show made-ups</option>
          <option value="ONL">Only show made-ups</option>
          <option value="NOT">Don't show made-ups</option>
        </select>
        <input type="checkbox" name="By temperament" id="Temps">
          {/* <option value="TEMP"></option> */}
        </input>
        {/* <section>
          <button onClick={() => onChangePage(-1)}>Prev</button>| {page} |
          <button onClick={() => onChangePage(1)}>Next</button>
        </section> */}
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
    </div>
  );
}
export default Home;
