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
            <h1>Hi, I'm The Portfolio!</h1>
            <div className='Gallery'>
                <Card projectImage={wen} projectName="Learn Mandarin"></Card>
                <Card projectImage={leaf} projectName="Diakonia Retreat Center"></Card>
                <Card projectImage={calc} projectName="Typescript Calculator"></Card>
                <Card projectImage={cart} projectName="Shop App"></Card>
                <Card projectImage={press} projectName="Press A to Begin"></Card>
                <Card projectImage={bamboo} projectName="Swaying Bamboo"></Card>
            </div>
            
        </div>
    )
}

export default Portfolio;