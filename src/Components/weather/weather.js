import React,{Component} from 'react';
import './weather.css';
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
                        <li>To build a weather app with an API</li>
                        <li>To have the background change depending on the temperature</li>
                    </ul>
                </div>
                <img className='w-img-1' src={weather1}></img>
                <img className='w-img-2' src={weather2}></img>
                <div className='w-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Finding an API that didn't require the user to input their latitude and longitude</li>
                        <li>Deciding on a reasonable cutoff temperature for the background to change to hot</li>
                        <li>A weird bug where the app wouldn't load without a line of code, but wouldn't run with it</li>
                    </ul>
                </div>
                <img className='w-img-3' src={weather3}></img>
                <div className='w-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>How to build a weather app with a changing background depending on the temperature</li>
                        <li>You are not locked into a particular API, and you can find one that behaves they way you need it to</li>
                        <li>Sometimes you need a second pair of eyes to point out the source of the bug</li>
                    </ul>
                </div>
                <div className='w-block-4'>
                    <h4>Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/weather-app"><p>GitHub Weather Application</p></a>
                    
                    <h4>Checkout the Demo Video:</h4>
                    <a href='https://youtube.com/shorts/Y6xNQ6waaYU?feature=share'><p>Weather App Demo</p></a>

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Weather;