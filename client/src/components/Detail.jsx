import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../store/actions";

function DogDetail({ match }) {
  const Details = useSelector((state) => state.dogsDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogDetail(match.params.apiId));
  }, [dispatch, match.params.apiId]);

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
    <div>
      <h1>Detailed Info</h1>
      <h2>{Details.name}</h2>
      <img src={Details.img} alt="Pichicho" />
      <div>
        <p alt="Con altura">Min.Height: {Details.Minheight} </p>
        <p alt="Con altura">Max.Height:{Details.Maxheight} </p>
        <p alt="Ta pesao el día">Min.Weight: {Details.Minweight} </p>
        <p alt="Ta pesao el día">Max.Weight: {Details.Maxweight} </p>
        <p alt="Comentariograciosogenérico">Lifespan: {Details.lifespan} </p>
        <p>
          Temperaments:
          {Details.temperaments?.map((t) => (
            <span key={t.id}>{t.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
export default DogDetail;
