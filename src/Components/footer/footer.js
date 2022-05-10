import React from 'react';
import './footer.css'



const Footer = () => {
    return(
        <div className='Footer'>
            
            <div className='About'>
                <a href='/about'> <h4>About</h4> </a>
            </div>
            <div className='Portfolio'>
                <a href='/portfolio'> <h4>Portfolio</h4> </a>
                <a href="https://github.com/ReaganADavenport"> <p>GitHub</p> </a>
                <a href='https://medium.com/@reagan.a.davenport'> <p>Medium</p> </a>
            </div>
                
            <div className='Contact'>
                <a href='/Contact'> <h4>Contact</h4> </a>
                <p>Phone: (404) 558-9065</p>
                <p>Email: reagan.a.davenport@gmail.com</p>
                <a href='https://www.linkedin.com/in/reagan-davenport/'> <p>LinkedIn</p></a>
                <a href='https://twitter.com/ReaganADavenpo1'><p>Twitter</p></a>
            </div>
                
            
            
        </div>
    )
    };

export default Footer;