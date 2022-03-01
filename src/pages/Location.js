import React, { useState, useEffect } from "react";

import Cards from "../components/cards/Cards";
import InputGroup from "../components/filters/categories/InputGroup";

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState([]);
  let { name, type, dimension} = info;
  
  

  let countApi = "https://rickandmortyapi.com/api/location/"
  let api = `https://rickandmortyapi.com/api/location/${id}`;
  
  
  

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let numPages = await fetch(countApi).then((res) => res.json());
      let {info: allinfo} = numPages;
      let{count} = allinfo
      setPages(count);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api,countApi]);

  

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          <span className="text-primary mb-4">
            Lokasjon : {name === "" ? "Ukjent" : name}
          </span>
        </h1>
        <h5 className="text-center">
           Dimensjon : {dimension === "" ? "Ukjent" : dimension}
        </h5>
        <h6 className="text-center">
           Type : {type === "" ? "Ukjent" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Velg dimensjon</h4>
          <InputGroup setId={setId} name="Location" total={pages} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/Location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

