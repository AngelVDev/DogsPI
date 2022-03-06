import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../store/actions";

function DogDetail({ match }) {
  const Details = useSelector((state) => state.dogsDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogDetail(match.params.apiId));
  }, [dispatch, match.params.apiId]);
  return (
    <div>
      <h1>Detailed Info</h1>
      <h2>{Details.name}</h2>
      <img src={Details.img?.url} alt="Pichicho" />
      <div>
        <p>Height: Con altura </p>
        <p>Weight: Ta pesao el día </p>
        <p>Lifespan: Comentariograciosogenérico </p>
        <img src={Details.img} alt="" />
        {Details.temperaments?.map((t) => (
          <span key={t.id}>{t.name}</span>
        ))}
      </div>
    </div>
  );
}
export default DogDetail;
