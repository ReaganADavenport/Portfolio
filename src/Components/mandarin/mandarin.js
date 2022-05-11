import React,{Component} from 'react';
import './mandarin.css';
import mandarin1 from '../../Images/mandarin1.png';
import mandarin2 from '../../Images/mandarin2.png';
import mandarin3 from '../../Images/mandarin3.png';



const Mandarin = () => {
    return(
        <div className="Mandarin">
            <h1>Learn Mandarin</h1>
            <div className='content'>
                <div className='m-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was to create an application that would allow the user to have flashcards on Mandarin vocabulary, an online space to practice writing out the characters, and finally test yourself on writing characters. I ultimately did reach my goal, but looking back my CSS was not the best, and I would change somethings if I was to reattempted this project.</p>
                </div>
                <img className='m-img-1' src={mandarin1}></img>
                <img className='m-img-2' src={mandarin2}></img>
                <div className='m-block-2'>
                    <h3>Challenges</h3>
                    <p>I had inital trouble with getting the flashcards to flip properly, but that was a realtively easy hurdle. The real trouble came when I wanted to compare written Chinese to an image. I needed it to be sensitive enough to pick up when someone wrote the wrong character, but not too sensitive to ding someone who wrote in the correct character.</p>
                </div>
                <img className='m-img-3' src={mandarin3}></img>
                <div className='m-block-3'>
                    <h3>What I Learned</h3>
                    <p>I learned that I was capable of building a full-stack application with minimal guidance, which I needed since this was one of my earliest projects. Looking back with my experience, I see now that my styles were severly lacking. In the future, I plan to reattempt this project with better UI.</p>
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