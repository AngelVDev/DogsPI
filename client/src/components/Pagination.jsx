import React from "react";
export default function Pagination({ dogPerPage, allDogs, pagination }) {
  const pageNum = [];
  for (let i = 0; i <= Math.ceil(allDogs / dogPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNum &&
          pageNum.map((number) => {
            <li key={number}>
              <a onClick={() => pagination(number)}>{number}</a>;
            </li>;
          })}
      </ul>
    </nav>
  );
}
