import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Navbar from "./components/navbar/Navbar";


import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes  from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/cards/CardDetails";

function App() {
  return (<Router>
    <div className="App">
    <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<CardDetails />}/>
      <Route path="/Episodes" element={<Episodes />} />
      <Route path="/Episodes/:id" element={<CardDetails />}/>
      <Route path="/Location" element={<Location />} />
      <Route path="/Location/:id" element={<CardDetails />}/>
    </Routes>
  </Router>)
}


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState('alien');
  let { info, results } = fetchedData;

  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      
    })();
  }, [api]);

 

  return (
    <div className="App">
      
      <h1 className="text-center mb-4">Figurer</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumer={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
