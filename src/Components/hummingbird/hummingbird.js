import React from 'react';
import './hummingbird.css';
import humming1 from '../../Images/humming1.png';
import humming2 from '../../Images/humming2.png';
import humming3 from '../../Images/humming3.png';



const Hummingbird = () => {
    return(
        <div className="Hummingbird">
            <h1>Hummingbird Café App</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, CSS, HTML JavaScript</p>
                </div>
                <div className='h-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>To build an app with layered drinks</li>
                        <li>To have steam come off the hot drinks</li>
                    </ul>
                </div>
                <img className='h-img-1' src={humming1} alt="humming1"></img>
                <img className='h-img-2' src={humming2} alt="humming2"></img>
                <div className='h-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Figuring out how to put multiple colors in one div: stripes!</li>
                        <li>Finding a how to make steam in CSS that wasn't outdated</li>
        
                    </ul>
                </div>
                <img className='h-img-3' src={humming3} alt="humming3"></img>
                <div className='h-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>There is always a way to recreate something you see</li>
                        <li>It might take you longer if you use a different language</li>
                        
                    </ul>
                </div>
                <div className='h-block-4'>
                    <h4>Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/hummingbird-cafe"><p>GitHub Hummingbird Café Application</p></a>
                    
                    <h4>Checkout the Demo Video:</h4>
                    <a href='https://www.youtube.com/watch?v=1YZ0V0PKmq8'><p>Hummingbird Café App Demo</p></a>

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Hummingbird;