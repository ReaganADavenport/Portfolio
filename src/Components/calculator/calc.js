import React from 'react';
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
                        <li>To build an entire project with Typescript in React</li>
                        <li>To make a calculator with functionality to handle addition and subtraction</li>
                        <li>To refresh myself on how to code and run unit tests</li>
                        <li>To expand the project to include multiplication and division</li>
                    </ul>
                </div>
                <img className='c-img-1' src={calc1} alt="calc1"></img>
                <img className='c-img-2' src={calc2} alt="calc2"></img>
                <div className='c-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>I'd never used Typescript with React before</li>
                        <li>To remember how to write and run Unit Tests</li>
                    </ul>
                </div>
                <img className='c-img-3' src={calc3} alt="calc3"></img>
                <div className='c-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>How to launch a create-react-app with Typescript</li>
                        <li>How to write and run Unit Tests in Typescript</li>
                        <li>To be confident in extending a project based on what I learned</li>
                    </ul>
                </div>
                <div className='c-block-4'>
                    <h4>Please Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/Typescript_Calculator"><p>GitHub Typescript Calculator</p></a>
                    
                    <h4>Checkout the Demo Video:</h4>
                    <a href='https://youtube.com/shorts/3U6J98gFvPQ?feature=share'><p>Calculator</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Calculator;