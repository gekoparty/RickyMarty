import React, { useState, useEffect } from "react";
import Cards from "../components/cards/Cards";
import InputGroup from "../components/filters/categories/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState([]);
  let { air_date, name } = info;

  const countApi = "https://rickandmortyapi.com/api/episode/"
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let numPages = await fetch(countApi).then((res) => res.json());
      let {info: allinfo} = numPages;
      let{count} = allinfo
      setPages(count);

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
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Velg Episode</h4>
          <InputGroup setId={setId} name="Episode" total={pages} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/Episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
