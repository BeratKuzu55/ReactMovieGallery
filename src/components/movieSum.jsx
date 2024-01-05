import React, { useState } from "react";
import InputArea from "./inputArea2";
import MovieCard from "./card";
import getMovies from "../../movie";


/*const [aranan_film , setArananfilm] = useState({value : ""});

function _handleTextFieldChange(e){
  setArananfilm( setArananfilm(prevNote => {
    return {
      ...prevNote,
       value
    };
  })); 
  console.log(aranan_film);
}*/

function Moviesum() {

    const movies = getMovies();
    return (
      <>
        <InputArea
        ></InputArea>
        <div className='galeri'>
        {movies.map((item , id) => {
          return <MovieCard
          key = {id}
          src = {item.imagelink}
          title = {item.title}
          content = {item.content}
          />
        })}
        </div>
      </>
    )
  }

  export default Moviesum;