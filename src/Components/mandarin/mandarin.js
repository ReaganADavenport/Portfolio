import React from 'react';
import './mandarin.css';
import mandarin1 from '../../Images/mandarin1.png';
import mandarin2 from '../../Images/mandarin2.png';
import mandarin3 from '../../Images/mandarin3.png';



const Mandarin = () => {
    return(
        <div className="Mandarin">
            <h1>Learn Mandarin</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, API, HTML, CSS, JavaScript</p>
                </div>
                <div className='m-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>to create an application that would allow the user to have flashcards on Mandarin vocabulary</li>
                        <li>an online space to practice writing out the characters</li>
                        <li>finally test yourself on writing characters</li>
                    </ul>
                </div>
                <img className='m-img-1' src={mandarin1} alt="mandarin1"></img>
                <img className='m-img-2' src={mandarin2} alt="mandarin2"></img>
                <div className='m-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>I had inital trouble with getting the flashcards to flip properly, but that was a realtively easy hurdle.</li>
                        <li>The real trouble came when I wanted to compare written Chinese to an image. I needed it to be sensitive enough to pick up when someone wrote the wrong character, but not too sensitive to ding someone who wrote in the correct character.</li>
                    </ul>
                </div>
                <img className='m-img-3' src={mandarin3} alt="mandarin3"></img>
                <div className='m-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>I learned that I was capable of building a full-stack application with minimal guidance, which I needed since this was one of my earliest projects.</li>
                        <li>Knowing what I know now, I took the opportunity to improve my CSS skills.</li>
                        <li>In the future, I plan to reattempt this project with better UI.</li>
                    </ul>
                </div>
                <div className='m-block-4'>
                    <h4>Please Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/learn-mandarin-client"><p>GitHub Client-Side</p></a>
                    <a href="https://github.com/ReaganADavenport/learn-mandarin-api"><p>GitHub API</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Mandarin;