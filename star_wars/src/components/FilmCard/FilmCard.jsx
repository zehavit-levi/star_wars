import './FilmCard.css';
import React  from 'react';
import { BsSuitHeartFill,  BsSuitHeart} from 'react-icons/bs';

export default function FilmCard({film,favorites,setFavorites}){

   const updateFav = (filmTilte,action)=> {
      let favoriteArr;
      if(action === "add"){
         favoriteArr = favorites;
         favoriteArr.push(filmTilte);
      } else {
         favoriteArr = favorites.filter((favorite)=>favorite!==filmTilte)
         console.log(favoriteArr)
      }
      setFavorites([...favoriteArr]);
      localStorage.setItem("favorites",JSON.stringify([...favoriteArr]));

   }
 return(
    <div className="film_container">
       <div className="title">{film["title"]}</div>
       <div className="details">
          <div className="title">{film["title"]}</div>
          <div className="abstract">{film["opening_crawl"]}</div>
          {
             favorites.includes(film["title"]) ? 
             <BsSuitHeartFill onClick={()=>updateFav(film["title"])} style={{color:'red'}}/>
             :
            <BsSuitHeart onClick={()=>updateFav(film["title"],"add")} style={{color:'red'}}/> 
             
          }
       </div>
    </div>
 )
}
