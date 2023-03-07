import React from 'react'
import './content.css';
import haus1 from '../../assets/hausinnen.jpg';

const Content = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>Willkommen</h1>
        <h2>bei test-test</h2>
        <p>Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum <br></br>
        Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum <br></br>
        Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum <br></br>
        Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum <br></br>
        Lore Ipsum Lore Ipsum Lore Ipsum 
        </p>
        <button className="scale-up-center button-85" role="button">Jetzt buchen!</button>
      </div>
      <div className="box-2">
      </div>
      
    </div>
  )
}

export default Content