import React from 'react';
import './hummingbird.css';
// import weather1 from '../../Images/weather1.png';
// import weather2 from '../../Images/weather2.png';
// import weather3 from '../../Images/weather3.png';



const Hummingbird = () => {
    return(
        <div className="Hummingbird">
            <h1>Hummingbird Café App</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, JavaScript</p>
                </div>
                <div className='h-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>To build an app with layered drinks</li>
                        <li>To have steam come off the hot drinks</li>
                    </ul>
                </div>
                <img className='h-img-1' src={""} alt="humming1"></img>
                <img className='h-img-2' src={""} alt="humming2"></img>
                <div className='h-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li></li>
                        
                    </ul>
                </div>
                <img className='h-img-3' src={""} alt="humming3"></img>
                <div className='h-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li></li>
                        
                    </ul>
                </div>
                <div className='h-block-4'>
                    <h4>Checkout My Code Here:</h4>
                    {/* <a href=""><p>GitHub Hummingbird Café Application</p></a> */}
                    
                    <h4>Checkout the Demo Video:</h4>
                    {/* <a href=''><p>Hummingbird Café App Demo</p></a> */}

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Hummingbird;