import React from "react";
import styled from "styled-components";

export default function Card({ name, image, temperament, weight }) {
  return (
    <CARD>
      <h1>{name}</h1>
      <h5>{temperament}</h5>
      <h5>{weight}</h5>
      <img src={image} alt="Not a dog" />
    </CARD>
  );
}
export const CARD = styled.div`
  width: 200px;
  height: 250px;
  background: #07182e;
  border-radius: 5px;
  text-align: center;
  color: #f0f0f0;
  font-family: inherit;
  z-index: 1;
`;
