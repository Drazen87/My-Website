import React from 'react';


import { Navbar, Content, Produkte, SliderText } from './components';
import { Header } from './containers';


import './App.css';

const App = () => (
  <div className="App">
      <Navbar />
      <Header />
    
      <Content />
      <Produkte  />
  </div>
  
);
export default App;