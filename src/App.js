import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './Components/navbar/navbar';
import Footer from './Components/footer/footer';
import Home from './Components/home/home';
import About from './Components/about/about';
import Portfolio from './Components/portfolio/portfolio';
import Contact from './Components/contact/contact';

import Mandarin from './Components/mandarin/mandarin';
import Drc from './Components/drc/drc';
import Calculator from './Components/calculator/calc';



function App() {
  return(
    <Router>
      <div className="Body">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/portfolio/mandarin" element={<Mandarin></Mandarin>}></Route>
          <Route path="/portfolio/drc" element={<Drc></Drc>}></Route>
          <Route path="/portfolio/calculator" element={<Calculator></Calculator>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
)
}

export default App;
