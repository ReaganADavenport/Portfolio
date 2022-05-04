import React from 'react';
import './footer.css'



const Footer = () => {
    return(
        <div className='Footer'>
            
            <div className='About'>
                <h4>About</h4>
            </div>
            <div className='Portfolio'>
                <h4>Portfolio</h4>
                <p>GitHub</p>
                <p>Medium</p>
            </div>
                
            <div className='Contact'>
                <h4>Contact</h4>
                <p>Phone: (404) 558-9065</p>
                <p>Email: reagan.a.davenport@gmail.com</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
            </div>
                
            
            
        </div>
    )
    };

export default Footer;