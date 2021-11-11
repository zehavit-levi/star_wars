import './App.css';
import React , { useState ,useEffect }from 'react';
import axios from "axios";
import FilmsList from './components/FilmsList/FilmsList';


function App() {
  const [results, setResults] = useState(null);
  const [favoritsList, setFavoritsList] = useState([]);

  const searchURL="https://swapi.dev/api/films/";
    axios.get(searchURL).then(response => {
      setResults(response.data.results)
    });
  

  return (
    <div className="App">
      {results!=null ?
     <FilmsList filmsList={results} favoritsList={favoritsList}/>:
     <></>}
    </div>
  );
}

export default App;
