import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDogDetail } from "../store/actions";

function DogDetail({ match }) {
  const Details = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogDetail(match.params.id));
  }, [dispatch, match.params.id]);

  // let weightmin = Details.weight.split("-")[0];
  // let weightmax = Details.weight.split("-")[1] ? Details.weight.split(" - ")[1] : "39";
  // let heightmin = Details.height.split("-")[0];
  // let heightmax = Details.height.split("-")[1]
  //   ? Details.height.split(" - ")[1]
  //   : Math.round(Details.height.split(" - ")[0] * 1.1);
  // let weightmin = weight.split("-")[0];
  // let weightmax = weight.split("-")[1] ? weight.split(" - ")[1] : "39";
  // let heightmin = height.split("-")[0];
  // let heightmax = height.split("-")[1]
  //   ? height.split(" - ")[1]
  //   : Math.round(height.split(" - ")[0] * 1.1);
  return (
    <DetailedCard>
      <h1>Detailed Info</h1>
      <h2>{Details.name}</h2>
      <img src={Details.img} alt="Pichicho" />
      <div>
        <p alt="Con altura">Min.Height: {Details.height.split("-")[0]} Cms.</p>
        <p alt="Con altura">
          Max.Height:
          {Details.height.split("-")[1]
            ? height.split(" - ")[1]
            : Math.round(height.split(" - ")[0] * 1.1)}{" "}
          Cms.{" "}
        </p>
        <p alt="Ta pesao el día">
          Min.Weight: {Details.weight.split("-")[0]} Kgs.
        </p>
        <p alt="Ta pesao el día">
          Max.Weight:{" "}
          {Details.weight.split("-")[1] ? weight.split(" - ")[1] : "39"} Kgs.
        </p>
        <p alt="Comentariograciosogenérico">Lifespan: {Details.lifespan} </p>
        <p>
          Temperaments:
          {Details.temperaments?.map((t) => (
            <span>{t.name}</span>
          ))}
        </p>
      </div>
    </DetailedCard>
  );
}
export default DogDetail;
const DetailedCard = styled.div`
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
