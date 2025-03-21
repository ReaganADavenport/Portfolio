import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './Components/navbar/navbar';
import Footer from './Components/footer/footer';
import Home from './Components/home/home';
import About from './Components/about/about';
import Resume from './Components/resume/resume';
import Portfolio from './Components/portfolio/portfolio';
import Contact from './Components/contact/contact';

import Mandarin from './Components/mandarin/mandarin';
import DavKlein from './Components/davenport-klein/davklein';
import Drc from './Components/drc/drc';
import Calculator from './Components/calculator/calc';
import Shop from './Components/shop/shop';
import Weather from './Components/weather/weather';
import Hummingbird from './Components/hummingbird/hummingbird';
import Radicals from './Components/radicals/radicals';



function App() {
  return(
    <Router>
      <div className="Body">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>

          <Route path="/portfolio/davenportklein" element={<DavKlein></DavKlein>}></Route>
          <Route path="/portfolio/mandarin" element={<Mandarin></Mandarin>}></Route>
          <Route path="/portfolio/drc" element={<Drc></Drc>}></Route>
          <Route path="/portfolio/calculator" element={<Calculator></Calculator>}></Route>
          <Route path="/portfolio/shop" element={<Shop></Shop>}></Route>
          <Route path="/portfolio/weather" element={<Weather></Weather>}></Route>
          <Route path="/portfolio/hummingbird" element={<Hummingbird></Hummingbird>}></Route>
          <Route path="/portfolio/radicals" element={<Radicals></Radicals>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
)
}

export default App;
