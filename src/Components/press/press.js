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
                        <li>To create an online home for a book and a direct way to buy the book</li>
                        <li>To make a referance guide for the "relics" mentioned in the book</li>
                    </ul>
                </div>
                <img className='p-img-1' src={press1}></img>
                <img className='p-img-2' src={press2}></img>
                <div className='p-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>There was no plan</li>
                        <li>There was no clear design</li>
                    </ul>
                </div>
                <img className='p-img-3' src={press3}></img>
                <div className='p-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>ALWAYS have a plan or at least a design in mind</li>
                        <li>Know your audience</li>
                        <li>How to create a glowing neon sign in CSS</li>
                    </ul>
                </div>
                <div className='p-block-4'>
                    <h4>Please Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/press-A-to-begin"><p>GitHub Press A to Begin</p></a>
                    
                    <h4>Checkout the Demo Videos:</h4>
                    <a href='https://www.youtube.com/watch?v=boIwlId1_Zg'><p>Press A to Begin Demo</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Press;