import React from 'react';
import './drc.css';

import drc1 from "../../Images/drc1.png";
import drc2 from "../../Images/drc2.png"
import drc3 from "../../Images/drc3.png";


const Drc = () => {
    return(
        <div className="drc">
            <h1>Diakonia Retreat Center</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>Squarespace</p>
                </div>
                <div className='d-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>Refactored the old WordPress site to include e-commerce, to streamline the order process to a single website</li>
                        <li>Spearheaded the moved from WordPress to SquareSpace</li>
                        <li>make the website responsive and to allow the owners to easily maintain the site without having to write any code</li>
                        <li>Reconfigured the website to allow for a more elegant and user-friendly mobile experience for the users</li>
                    </ul>
                </div>
                <img className='d-img-1' src={drc1} alt="drc1"></img>
                <img className='d-img-2' src={drc2} alt="drc2"></img>
                <div className='d-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>working within the constraits of WordPress</li>
                        <li>moving the site to Squarespace</li>
                        <li>managing employees' expectations</li>
                        <li>Figuring out ecommerce and all the logistics that go with it</li>
                    </ul>
                </div>
                <img className='d-img-3' src={drc3} alt="drc3"></img>
                <div className='d-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>Gained experience using WordPress</li>
                        <li>Gained experience using Squarespace</li>
                        <li>Gained experience managing expectations</li>
                        <li>Gained experience with creating a user-friendly ecommerce experience</li>
                        <li>In design, less is more</li>
                        <li>Sometimes a solution isn't what the customer wanted, but it is what they need</li>
                    </ul>
                </div>
                <div className='d-block-4'>
                    <h4>Please Checkout the Site Here:</h4>
                    <a href="https://www.thediakoniaretreatcenter.com"><p>thediakoniaretreatcenter.com</p></a>
                    
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Drc;