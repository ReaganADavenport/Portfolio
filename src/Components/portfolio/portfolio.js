import React,{Component} from 'react';
import './portfolio.css';

import Card from '../card/card';

import wen from '../../Images/wen.png';
import leaf from '../../Images/leaf.png';
import calc from '../../Images/calc.png';
import cart from '../../Images/shop-cart.png';
import press from '../../Images/press-a.png';
import bamboo from '../../Images/bamboo.png';


const Portfolio = () => {
    return(
        <div className="Porty">
            <h1>Portfolio</h1>
            <div className='Gallery'>
                <Card projectImage={wen} projectName="Learn Mandarin" projectDescript="React, JavaScript, HTML, CSS" projectLink="/portfolio/mandarin"></Card>
                <Card projectImage={leaf} projectName="DRC" projectDescript="Squarespace" projectLink="/portfolio/drc"></Card>
                <Card projectImage={calc} projectName="Typescript Calculator" projectDescript="React, Typescript"></Card>
                <Card projectImage={cart} projectName="Shop App" projectDescript="React, JavaScript, HTML, CSS"></Card>
                <Card projectImage={press} projectName="Press A to Begin" projectDescript="React, JavaScript, HTML, CSS, API"></Card>
                <Card projectImage={bamboo} projectName="Swaying Bamboo" projectDescript="React, Javascript, HTML, CSS"></Card>
            </div>
            
        </div>
    )
}

export default Portfolio;