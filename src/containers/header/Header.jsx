import React from 'react'
import vintage from '../../assets/vintage.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header img">
        <img src={vintage} />
      </div>

    </header>
  )
}

export default Header