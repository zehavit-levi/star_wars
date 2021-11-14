import './FilmCard.css';
import React  from 'react';
import { BsSuitHeartFill,  BsSuitHeart} from 'react-icons/bs';

export default function FilmCard({film,favorites,setFavorites}){
   const updateFav = (filmTilte)=> {
      let favoriteArr;
      if(!favorites.includes(filmTilte)){
         favoriteArr = favorites;
         favoriteArr.push(filmTilte);
      } else {
         favoriteArr = favorites.filter((favorite)=>favorite!==filmTilte);
      }
      setFavorites([...favoriteArr]);
      localStorage.setItem("favorites",JSON.stringify([...favoriteArr]));

   }
 return(
      <div className="details">
         <div className="title">{film["title"]}</div>
         <div className="abstract">{film["opening_crawl"]}</div>
         <div className="heart_container">
          {
             favorites.includes(film["title"]) ? 
             <BsSuitHeartFill className="hearticon"  onClick={()=>updateFav(film["title"])} style={{color:'red'}}/>
             :
            <BsSuitHeart className="hearticon" onClick={()=>updateFav(film["title"])} style={{color:'red'}}/> 
             
          }
          </div>
      </div>
   )
}
