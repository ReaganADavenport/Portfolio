import React from 'react';
import './davklein.css';
import davk1 from '../../Images/davklein-1.png';
import davk2 from '../../Images/davklein-2.png';
import davk3 from '../../Images/davklein-3.png';



const DavKlein = () => {
    return(
        <div className="DavKlein">
            <h1>Davenport•Klein Commercial Real Estate</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>Squarespace, UI, AI</p>
                </div>
                <div className='dk-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>To build a Squarespace website inline with the wants and needs of the owners</li>
                        <li>To create a real estate brokerage site that wasn't white and blue</li>
                        <li>To make a website that was bold and stood out, while providing the contact details for the brokers</li>
                    </ul>
                </div>
                <img className='dk-img-1' src={davk1} alt="davk1"></img>
                <img className='dk-img-2' src={davk2} alt="davk2"></img>
                <div className='dk-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Relearning Squarespace, having not touched it since 2020</li>
                        <li>Limited expirience using AI to generate copy</li>
                    </ul>
                </div>
                <img className='dk-img-3' src={davk3} alt="davk3"></img>
                <div className='dk-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>Addressing goals and expectaions for the website at the start</li>
                        <li>Got better at creating AI prompts</li>
                    </ul>
                </div>
                <div className='dk-block-4'>
                   
                    <h4>Checkout the Live Website Here:</h4>
                    <a href='https://www.davenportklein.com'><p>Davenport•Klein Commercial Real Estate</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default DavKlein;