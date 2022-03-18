import React from "react";
import styled from "styled-components";

export default function Pagination({ dogPerPage, allDogs, pagination }) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <NAV>
      <UL>
        {pageNum &&
          pageNum.map((number) => (
            <li>
              <AAA onClick={() => pagination(number)}>{number}</AAA>
            </li>
          ))}
      </UL>
    </NAV>
  );
}
const NAV = styled.nav``;
const UL = styled.ul`
  display: flex;
  list-style: none;
`;
const AAA = styled.a`
  display: block;
  font-size: 1.4rem;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  margin: 4px;
`;
