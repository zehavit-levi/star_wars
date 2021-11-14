import './App.css';
import React , {useEffect, useState} from 'react';
import FilmsList from './components/FilmsList/FilmsList';


function App() {
  const [results, setResults] = useState(null);
 

  const searchURL="https://swapi.dev/api/films/";

  useEffect (()=>{
      async function fetchData() {
        const response = await fetch(searchURL);
        const responseData = await response.json();
        setResults(responseData.results);
      }
      fetchData();
  },[])
  return (
    <div className="App">
      <h1 className="app_title">Star Wars Movies</h1>
      {results!=null ?
     <FilmsList filmsList={results}/>:
     <></>}
    </div>
  );
}

export default App;
