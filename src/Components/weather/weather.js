import React,{Component} from 'react';
import './shop.css';
import weather1 from '../../Images/weather1.png';
import weather2 from '../../Images/weather2.png';
import weather3 from '../../Images/weather3.png';



const Weather = () => {
    return(
        <div className="Weather">
            <h1>Weather App</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, JavaScript, Weather API</p>
                </div>
                <div className='w-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>To build an ecommerce user-interface, that was beautiful and intuitive</li>
                        <li>To get more comforable with CSS Grid</li>
                        <li>To make a shopping cart with a badge showing the number of items in the cart</li>
                    </ul>
                </div>
                <img className='w-img-1' src={weather1}></img>
                <img className='w-img-2' src={weather2}></img>
                <div className='w-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Deciding where and how to begin to create the badge for the shopping cart</li>
                        <li>Getting CSS Grid to look propotional</li>
                        <li>Getting the app to be responsive</li>
                        <li>Finding a background image that would suit the app</li>
                    </ul>
                </div>
                <img className='w-img-3' src={weather3}></img>
                <div className='w-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>how to build a shopping cart with a badge that displays the number of items in the cart</li>
                        <li>how to use CSS Grid</li>
                        <li>finding the right background image is essential to creating the right atmosphere</li>
                    </ul>
                </div>
                <div className='w-block-4'>
                    <h4>Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/Shop-app"><p>GitHub Shop Application</p></a>
                    
                    <h4>Checkout the Demo Video:</h4>
                    <a href='https://youtube.com/shorts/3DH9HWKU9AI?feature=share'><p>Weather App Demo</p></a>

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Weather;