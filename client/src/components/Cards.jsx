import React from "react";
import styled from "styled-components";

export default function Card({ name, image, temperament, weight }) {
  return (
    <CARD>
      <h2>{name}</h2>
      <div>
        <PHOTO src={image} alt="Not a dog" />
      </div>
      <div>
        <h3>Temperaments:{temperament}</h3>
        <h3>Weight: {weight}</h3>
      </div>
    </CARD>
  );
}
export const CARD = styled.div`
  width: 15rem;
  height: 20rem;
  border: 2px outset red;
  margin-top: 4rem;
`;
export const PHOTO = styled.img`
  max-width: 70%;
  height: auto;
  object-fit: contain;
`;
