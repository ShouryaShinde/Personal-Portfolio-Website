import React from "react" ;
import HeroSpiderman from '../assets/HeroSpiderman.jpeg' ;

function HeroFloatImage() {
  return(
    <div
      style = {{backgroundImage : `url(${HeroSpiderman})`}}
      className="hero-image rounded-lg bg-cover bg-center bg-no-repeat w-72 aspect-3/4 mr-52"
    />
  );
}

export default HeroFloatImage ;