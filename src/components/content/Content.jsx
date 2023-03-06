import React from 'react'
import './content.css';
import haus1 from '../../assets/hausinnen.jpg';

const Content = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>Willkommen bei <br></br>boho-casa</h1>
        <p>Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
        </p>
      </div>
      <div className="box-2">
        <img src={haus1} />
      </div>
      
    </div>
  )
}

export default Content