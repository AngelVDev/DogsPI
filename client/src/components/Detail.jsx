import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDogDetail } from "../store/actions";
import { PHOTO } from "./Cards";

function DogDetail({ match }) {
  const details = useSelector((state) => state.dogsDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogDetail(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <DetailedCard>
      <h1>Detailed Info</h1>
      <h2>{details.name}</h2>
      <PhotoDetail src={details.image} alt="Pichicho" />
      <div>
        <p alt="Con altura">Height: {details.height} Cms.</p>
        <p alt="Ta pesao el día">Weight: {details.weight} Kgs.</p>
        <p alt="Comentariograciosogenérico">Lifespan: {details.lifespan} </p>
        <p>
          Temperaments: <span>{details.temperament}</span>
        </p>
      </div>
    </DetailedCard>
  );
}
export default DogDetail;
export const DetailedCard = styled.div`
  background-color: rgba(28, 27, 27, 0.56);
  text-align: center;
  display: block;
  align-content: center;
  padding-top: 2rem;
  margin-left: 4.5vw;
  height: 90vh;
  width: 90vw;
  box-shadow: 0px 1px 18px 5px rgba(121, 255, 244, 0.76),
    0px 1px 5px 4px rgba(121, 255, 185, 0.85) inset;
`;
const PhotoDetail = styled.img`
  border-radius: 3%;
  object-fit: fill;
  max-width: 25%;
  &:hover {
    animation: myAnim 1s ease 0s 1 normal forwards,
      picho 2600ms cubic-bezier(0.33, 1, 0.68, 1) 78ms 1 normal forwards;
    @keyframes myAnim {
      0% {
        transform: scale(1);
      }

      100% {
        transform: scale(1.3);
      }
    }
    @keyframes picho {
      0%,
      100% {
        transform: translateX(0);
      }

      10%,
      30%,
      50%,
      70% {
        transform: translateX(-10px);
      }

      20%,
      40%,
      60% {
        transform: translateX(10px);
      }

      80% {
        transform: translateX(8px);
      }

      90% {
        transform: translateX(-8px);
      }
    }
  }
`;
