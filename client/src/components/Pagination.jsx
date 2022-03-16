import React from "react";
import styled from "styled-components";

export default function Pagination({ dogPerPage, allDogs, pagination }) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <UL>
      {pageNum &&
        pageNum.map((number) => (
          <button onClick={() => pagination(number)}>{number}</button>
        ))}
    </UL>
  );
}
const UL = styled.nav`
  width: 5vw;
  height: 5vh;
  background-color: white;
  color: black;
`;
