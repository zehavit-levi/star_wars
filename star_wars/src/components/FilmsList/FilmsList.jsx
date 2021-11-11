import './FilmsList.css';
import FilmCard from '../FilmCard/FilmCard';
import React , {useEffect, useState}  from 'react';

export default function FilmsList(props){
    let filmsList;
    let films = props.filmsList;
    const [favorites, setFavorites] = useState([]);
 
    
    useEffect(()=>{
        const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
        if(getArray !== 0) setFavorites([...getArray]);
    },[]);
   

    filmsList = films.map((film, index) => <FilmCard key={index} film={film} favorites={favorites} setFavorites={setFavorites} />)

    return (
        <div className="row align-items-center">
            {filmsList}
        </div>
    )
}