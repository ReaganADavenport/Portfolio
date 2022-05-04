import React from 'react'

import './App.css';

import Nav from './Components/navbar/navbar';
import Footer from './Components/footer/footer';
import Home from './Components/home/home';
import Portfolio from './Components/portfolio/portfolio';



function App() {
  return(
    <div className="Body">
      <Nav></Nav>
      <Home></Home>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
)
}

export default App;
