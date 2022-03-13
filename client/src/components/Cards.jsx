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
        <h5>Standard weight: {weight} Kgs</h5>
        <h5>Usual temperaments:{temperament}</h5>
      </div>
    </CARD>
  );
}
export const CARD = styled.div`
  /* display: grid; */
  width: 15vw;
  height: 20rem;
  border: 2px outset red;
  margin-top: 4rem;
`;
export const PHOTO = styled.img`
  max-width: 70%;
  height: auto;
  object-fit: contain;
`;
export const HIDD = styled.div`
diplay: hidden;
&hover(
  display:
)
`;
