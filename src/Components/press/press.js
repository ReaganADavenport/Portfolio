import React,{Component} from 'react';
import './press.css';
import press1 from '../../Images/press1.png';
import press2 from '../../Images/press2.png';
import press3 from '../../Images/press3.png';



const Press = () => {
    return(
        <div className="Press-A">
            <h1>Press A to Begin</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, JavaScript, ISUU API</p>
                </div>
                <div className='p-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li></li>
                       
                    </ul>
                </div>
                <img className='p-img-1' src={press1}></img>
                <img className='p-img-2' src={press2}></img>
                <div className='p-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li></li>
                        
                    </ul>
                </div>
                <img className='p-img-3' src={press3}></img>
                <div className='p-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li></li>
    
                    </ul>
                </div>
                <div className='p-block-4'>
                    <h4>Please Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/Typescript_Calculator"><p>GitHub Press A to Begin</p></a>
                    
                    <h4>Checkout the Demo Videos:</h4>
                    <a href='https://youtu.be/vlXVfDkdum4'><p>Press A to Begin Demo</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Press;