import React,{Component} from 'react';
import './calc.css';
import calc1 from '../../Images/calc1.png';
import calc2 from '../../Images/calc2.png';
import calc3 from '../../Images/calc3.png';



const Calculator = () => {
    return(
        <div className="Calculator">
            <h1>Typescript Calculator</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, Typescript, Unit Tests</p>
                </div>
                <div className='c-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>To build a full project with Typescript</li>
                        <li>To remind myself how to make and run unit tests</li>
                        <li>To extend the project based on what I learned</li>
                    </ul>
                </div>
                <img className='c-img-1' src={calc1}></img>
                <img className='c-img-2' src={calc2}></img>
                <div className='c-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>I'd never used Typescript with React, so I was flying a little blind</li>
                        <li>I forgot how to write and run Unit Tests</li>
                    </ul>
                </div>
                <img className='c-img-3' src={calc3}></img>
                <div className='c-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>How to launch a create-react-app with Typescript</li>
                        <li>How to write and run Unit Tests in Typescript</li>
                        <li>To be confident in extending a project based on what I learned</li>
                    </ul>
                </div>
                <div className='m-block-4'>
                    <h4>Please Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/Typescript_Calculator"><p>GitHub Typescript Calculator</p></a>
                    
                    <h4>Checkout the Demo Videos:</h4>
                    <a href='https://youtu.be/vlXVfDkdum4'><p>Calculator - Addition</p></a>
                    <a href='https://youtube.com/shorts/kK2cs4tamAY?feature=share'><p>Calculator - Multiplication + Division</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Calculator;