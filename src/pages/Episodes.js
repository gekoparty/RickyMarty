import React, { useState, useEffect } from "react";
import Cards from "../components/cards/Cards";
import InputGroup from "../components/filters/categories/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          <span className="text-primary mb-4">
            Episode : {name === "" ? "Ukjent" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Utgitt dato : {air_date === "" ? "Ukjent" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Velg Episode</h4>
          <InputGroup setId={setId} name="Episode" total={51} />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
