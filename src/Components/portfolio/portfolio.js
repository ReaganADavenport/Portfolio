import React from 'react';
import './portfolio.css';

import Card from '../card/card';

import wen from '../../Images/wen.png';
import leaf from '../../Images/leaf.png';
import calc from '../../Images/calc.png';
import cart from '../../Images/shop-cart.png';
import press from '../../Images/press-a.png';
import bamboo from '../../Images/bamboo.png';
import weather from '../../Images/weather.png';
import hummingbird from '../../Images/humming.png';
import plum from '../../Images/radicals.png';


const Portfolio = () => {
    return(
        <div className="Porty">
            <h1>Portfolio</h1>
            <div className='Gallery'>
                
                <Card projectImage={plum} projectName="Learning Radicals" projectDescript="React, JavaScript, HTML, CSS" projectLink="/portfolio/radicals"></Card>
                <Card projectImage={hummingbird} projectName="Hummingbird Café" projectDescript="React, CSS, JavaScript" projectLink="/portfolio/hummingbird"></Card>
                <Card projectImage={weather} projectName="Weather App" projectDescript="React, JavaScript, HTML, CSS, API" projectLink="/portfolio/weather"></Card>
                <Card projectImage={leaf} projectName="DRC" projectDescript="Squarespace" projectLink="/portfolio/drc"></Card>
                <Card projectImage={calc} projectName="Typescript Calculator" projectDescript="React, Typescript" projectLink="/portfolio/calculator"></Card>
                <Card projectImage={cart} projectName="Shop App" projectDescript="React, JavaScript, HTML, CSS" projectLink="/portfolio/shop"></Card>
                {/* <Card projectImage={press} projectName="Press A to Begin" projectDescript="React, JavaScript, HTML, CSS, API" projectLink="/portfolio/press"></Card>
                <Card projectImage={bamboo} projectName="Swaying Bamboo" projectDescript="React, Javascript, HTML, CSS" projectLink="/portfolio/bamboo"></Card> */}
                <Card projectImage={wen} projectName="Learn Mandarin" projectDescript="React, JavaScript, HTML, CSS" projectLink="/portfolio/mandarin"></Card>
                
            </div>
            
        </div>
    )
}

export default Portfolio;