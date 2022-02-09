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

function App() {
  return (<Router>
    <div className="App">
    <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Episodes" element={<Episodes />} />
      <Route path="/Location" element={<Location />} />
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

  console.log(species)

  return (
    <div className="App">
      
      
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />

          <div className="col-md-8">
            <div className="row">
              <Cards results={results} />
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
