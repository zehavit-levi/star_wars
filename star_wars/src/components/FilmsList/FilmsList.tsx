import './FilmsList.css';
import FilmCard from '../FilmCard/FilmCard';
import React , {useEffect, useState}  from 'react';

export default function FilmsList(props : {filmsList:any}){
    let filmsList;
    let films = props.filmsList;
    const [favorites, setFavorites] = useState<Array<String>>([]);
    const [chosenFilm, setChosenFilm] = useState<object>();
    
    useEffect(()=>{
        const getArray:Array<String> = JSON.parse(localStorage.getItem('favorites') || '0');
        if(getArray.length !== 0) setFavorites([...getArray]);
    },[]);
   
    const handleChosenFilm = (film:any): void => setChosenFilm(film);

    filmsList = films.map((film:any, index:number) => <div className="titlerow" key={index} onClick={() => handleChosenFilm(film)} >{film.title}</div>)

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
                    {chosenFilm !==undefined? <FilmCard film={chosenFilm} favorites={favorites} setFavorites={setFavorites}/>:<>Please Chose a film to see it details</>}
                </div>
            </div>
        </div>
    )
}