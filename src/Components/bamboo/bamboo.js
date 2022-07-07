import React from 'react';
import './bamboo.css';
import bamboo1 from '../../Images/bamboo1.png';
import bamboo2 from '../../Images/bamboo2.png';
import bamboo3 from '../../Images/bamboo3.png';



const Bamboo = () => {
    return(
        <div className="Bamboo">
            <h1>Swaying Bamboo</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, JavaScript</p>
                </div>
                <div className='b-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>Originally going to be a porfolio</li>
                        <li>Learn how to do animations in CSS</li>
                    </ul>
                </div>
                <img className='b-img-1' src={bamboo1} alt="bamboo1"></img>
                <img className='b-img-2' src={bamboo2} alt="bamboo2"></img>
                <div className='b-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Had no idea where to start on the animation</li>
                        <li>Had no idea where to look to find out where to start</li>
                    </ul>
                </div>
                <img className='b-img-3' src={bamboo3} alt="bamboo3"></img>
                <div className='b-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>How to make my own bamboo pngs on Adobe Illustrator</li>
                        <li>How to take information an reapply it to suit my means</li>
                        <li>How to make swaying animation in CSS</li>
                    </ul>
                </div>
                <div className='b-block-4'>
                    <h4>Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/portfolio-2.0"><p>GitHub Swaying Bamboo</p></a>
                    
                    <h4>Checkout the Demo Video:</h4>
                    <a href='https://www.youtube.com/shorts/my-2eC2vdFg'><p>Swaying Bamboo Demo</p></a>

                    <h4>Checkout My Medium Article About this App</h4>
                    <a href='https://medium.com/@reagan.a.davenport/how-to-code-swaying-bamboo-with-css-f666232a3cf'><p>How to Code Swaying Bamboo with CSS🎋</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Bamboo;