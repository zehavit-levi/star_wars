import './FilmCard.css';
import React  from 'react';

export default function FilmCard({film}){
 return(
    <div className="film_container">
       <div>{film["title"]}</div>
       <div>
          <div className="title">{film["title"]}</div>
          <div className="abstract">{film["opening_crawl"]}</div>
          <button type="button" >add to favorite</button>
       </div>
    </div>
 )
}
