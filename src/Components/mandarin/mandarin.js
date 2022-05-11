import React,{Component} from 'react';
import './mandarin.css';
import mandarin1 from '../../Images/mandarin1.png'
import mandarin2 from '../../Images/mandarin2.png'



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
            </div>
            
        </div>
    )
}

export default Mandarin;