import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getDogDetail } from "../store/actions/index";

const SearchBar = () => {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogDetail(name));
  };
  return (
    <div>
      <INPUT
        type="text"
        placeholder="Call your pal here..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};
export const INPUT = styled.input`
  /* font-family: "Alegreya Sans SC";
  font-weight: bold;
  background-color: #ffb12e;
  color: white;
  outline: 2px dashed #00e6f6;
  outline-offset: 5px; */
`;
export default SearchBar;
