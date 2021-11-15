import './FilmCard.css';
import React  from 'react';
// import { BsSuitHeartFill,  BsSuitHeart} from 'react-icons/bs';

export default function FilmCard(props :{film:any,favorites:Array<String>,setFavorites:any}){
   const updateFav = (filmTilte:String)=> {
      let favoriteArr:Array<String>;
      if(!props.favorites.includes(filmTilte)){
         favoriteArr = props.favorites;
         favoriteArr.push(filmTilte);
      } else {
         favoriteArr = props.favorites.filter((favorite)=>favorite!==filmTilte);
      }
      props.setFavorites([...favoriteArr]);
      localStorage.setItem("favorites",JSON.stringify([...favoriteArr]));

   }
 return(
      <div className="details">
         <div className="title">{props.film["title"]}</div>
         <div className="abstract">{props.film["opening_crawl"]}</div>
         <div className="heart_container">
          {/* {
             favorites.includes(film["title"]) ? 
             <BsSuitHeartFill className="hearticon"  onClick={()=>updateFav(film["title"])} style={{color:'red'}}/>
             :
            <BsSuitHeart className="hearticon" onClick={()=>updateFav(film["title"])} style={{color:'red'}}/> 
             
          } */}
          {
             props.favorites.includes(props.film["title"]) ? <div className="heart" onClick={()=>updateFav(props.film["title"])} style={{color:'red'}}>&#x2665;</div> : 
          <div className="heart" onClick={()=>updateFav(props.film["title"])}>&#x2665;</div>
          }
          </div>
      </div>
   )
}
