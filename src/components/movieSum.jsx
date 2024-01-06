import React, { useState } from "react";
import InputArea from "./inputArea2";
import MovieCard from "./card";
import getMovies from "../../movie";


var aranan_film = "";

function Moviesum() {

  const movies = getMovies();
  function _handleTextFieldChange(e){
    aranan_film = e.target.value;
    console.log(aranan_film);
    handleSearch();
  }
  
  var [bulunanFilmler , setMovies] = useState(movies);
  
  function handleSearch(){
    setMovies(movies.filter(item => item.title.toLocaleLowerCase().includes(aranan_film)));
    console.log(bulunanFilmler)
  }
    return (
      <>
        <InputArea
        aramaFonksiyonu = {_handleTextFieldChange}
        searc = {handleSearch}
        
        ></InputArea>

        <div className='galeri'>
        {bulunanFilmler.map((item , id) => {
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