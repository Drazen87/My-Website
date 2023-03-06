import React from 'react';


import { Navbar, Content } from './components';
import { Header } from './containers';


import './App.css';

const App = () => (
  <div className="App">
    <div className="container-main">
      <Navbar />
      <Header />
    </div>
    <div>
      <Content />
    </div>
  </div>
);
export default App;