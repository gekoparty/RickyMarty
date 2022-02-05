import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";

function App() {

  const [pageNumber, setPageNumber] = useState(1)
  let api =  `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  return (
    <div className="App">
    
    <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">WiKi</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Filters />
          </div>
          <div className="col-md-8">
            <div className="row">
            <Cards />
            <Cards />
            <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
