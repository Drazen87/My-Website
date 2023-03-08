import React from 'react'
import vintage from '../../assets/vintage.png';
import './header.css';

import {useRef, useEffect}from 'react';

const Header = () => {

  const [logo, SetLogo] = React.useState(false);

  const handleClick = () => {
    let element = document.getElementsByClassName("swiper-button-next")
    console.log(element);
    element.addEventListener(onclick(console.log("test")))
    
    
  }





  return (
    <header>
      <div className="header img">
        <img src={vintage} />
      </div>

      <button onClick={handleClick}>click mich</button>

    </header>
  )
}

export default Header