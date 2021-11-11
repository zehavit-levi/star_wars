import './FilmsList.css';
import FilmCard from '../FilmCard/FilmCard';
import React  from 'react';

export default function FilmsList(props){
    let filmsList;
    let films = props.filmsList;
 
    filmsList = films.map((film, index) => <FilmCard key={index} film={film} />)

    return (
        <div className="row align-items-center">
            {filmsList}
        </div>
    )
}