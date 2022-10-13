import React from 'react';
import './radicals.css';
import radicals1 from '../../Images/radicals1.png';
import radicals2 from '../../Images/radicals2.png';
import radicals3 from '../../Images/radicals3.png';



const Radicals = () => {
    return(
        <div className="Radicals">
            <h1>Learning Radicals</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, JavaScript</p>
                </div>
                <div className='r-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>recreate Learn Mandarin, but better</li>
                        <li>more specifically, with better cards, that show what you guessed so that the user can learn from their mistakes</li>
                        <li>also make it look better with styles</li>
                        <li>is it possible to make this app without a backend? (Spoiler: yes!)</li>
                    </ul>
                </div>
                <img className='r-img-1' src={radicals1} alt="radicals1"></img>
                <img className='r-img-2' src={radicals2} alt="radicals2"></img>
                <div className='r-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Trying to remember how I did it last time</li>
                        <li>How to build without a backend</li>
                    </ul>
                </div>
                <img className='r-img-3' src={radicals3} alt="radicals3"></img>
                <div className='r-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>I am a better web developer than the me that just left bootcamp</li>
                        <li>I've grown and improved as a coder in that time</li>
                        <li>How to make a backend, without a backend</li>
                    </ul>
                </div>
                <div className='r-block-4'>
                    <h4>Please Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/Learning-Radicals"><p>GitHub Repo</p></a>
                    <a href="https://www.youtube.com/watch?v=vJXXCwyScaw"><p>Demo Video</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Radicals;