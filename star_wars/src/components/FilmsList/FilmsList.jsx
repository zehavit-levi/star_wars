import './FilmsList.css';
import FilmCard from '../FilmCard/FilmCard';
import React , {useEffect, useState}  from 'react';

export default function FilmsList(props){
    let filmsList;
    let films = props.filmsList;
    const [favorites, setFavorites] = useState([]);
    const [chosenFilm, setChosenFilm] = useState(null);
    
    useEffect(()=>{
        const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
        if(getArray !== 0) setFavorites([...getArray]);
    },[]);
   
    function handleChosenFilm(e,film){
        setChosenFilm(film);
    }

    filmsList = films.map((film, index) => <div className="titlerow" key={index} onClick={(e) => handleChosenFilm(e,film)} >{film.title}</div>)

    return (
        <div className="filmlist_container" >
            <div className="table_titles">
                <h3>Name:</h3>
                <h4>Details:</h4>
            </div>
            <div className="table_content">
                <div className="title">
                {filmsList}
                </div>
                <div className="filmcard_container">
                    {chosenFilm!==null? <FilmCard film={chosenFilm} favorites={favorites} setFavorites={setFavorites}/>:<>Please Chose a film to see it details</>}
                </div>
            </div>
        </div>
    )
}