import React from 'react';


import { Navbar, Content, Produkte, SliderText } from './components';
import { Header } from './containers';


import './App.css';

const App = () => (
  <div className="App">
    <div className="container-main">
      <Navbar />
      <Header />
    
      <Content />
      <Produkte  />
      <SliderText />
    </div>
  </div>
  
);
export default App;