import React from 'react'
import { useState } from 'react'
import Appbar from './components/appbar'
import Moviesum from './components/movieSum'
import Aboutme from './components/aboutMe'
function App() {

  const [inAboutMe , setAboutMe] = useState(false)
   function handleRouting(){
    setAboutMe(true);
  }

  function EnableMovieSum(){
    setAboutMe(false)
  }
  
  return (
    <>
      <Appbar 
        route = {handleRouting}
        enbMoviesum = {EnableMovieSum}
      ></Appbar>
      {inAboutMe ? <Aboutme></Aboutme> : <Moviesum></Moviesum>}
    </>
  )
}

export default App
