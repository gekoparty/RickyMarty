import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;
  console.log(fetchedData);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Kjønn : {gender}</span>
          </div>
          <div className="">
            <span className="fw-bold">Art : {species}</span>
          </div>
          <div className="">
            <span className="fw-bold">Type : {type === '' ? "Ukjent" : type}</span>
            
          </div>
          <div className="">
            <span className="fw-bold">Lokasjon : {location?.name}</span>
          </div>
          <div className="">
            <span className="fw-bold"> Origin : {origin?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
