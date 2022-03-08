import React from "react";
import styled from "styled-components";

export default function Card({ name, image, temperament, weMi, weMa }) {
  return (
    <CARD>
      <h2>{name}</h2>
      <PHOTO src={image} alt="Not a dog" />
      <div>
        <h5>{temperament}</h5>
        <h5>{weMi}</h5>
        <h5>{weMa}</h5>
      </div>
    </CARD>
  );
}
export const CARD = styled.div`
  width: 15rem;
  height: 20rem;
  border: 2px outset red;
  display: subgrid;
  margin-top: 4rem;
`;
export const PHOTO = styled.img`
  max-width: 70%;
  height: auto;
  object-fit: contain;
`;
export const H2 = styled.h2`
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
`;
