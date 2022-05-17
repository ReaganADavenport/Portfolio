import React from 'react';
import './footer.css'

import github from "../../Images/github-logo.png";
import medium from "../../Images/medium-logo.png";
import phone from "../../Images/phone-logo.png";
import email from "../../Images/email-logo.png";
import linkedin from "../../Images/linkedin-logo.png";
import twitter from "../../Images/twitter-logo.png";

const Footer = () => {
    return(
        <div className='Footer'>
            
            <div className='About'>
                <a href='/about'> <h4>About</h4> </a>
                <p>© Reagan Davenport - 2022</p>
            </div>
            <div className='Portfolio'>
                <a href='/portfolio'> <h4>Portfolio</h4> </a>
                <div className='portfolio-container'>
                    <a href="https://github.com/ReaganADavenport"> <img src={github}></img> </a>
                    <a href='https://medium.com/@reagan.a.davenport'> <img src={medium} className="medium"></img> </a>
                </div>
                
            </div>
                
            <div className='Contact'>
                <a href='/Contact'> <h4>Contact</h4> </a>
                <div className='contact-container'>
                    <a href="tel:404-558-9065"> <img src={phone} className="phone"></img> </a>
                    <a href="mailto:reagan.a.davenport@gmail.com"> <img src={email} className="email"></img></a>
                    <a href='https://www.linkedin.com/in/reagan-davenport/'> <img src={linkedin} className="linkedin"></img> </a>
                    <a href='https://twitter.com/ReaganADavenpo1'> <img src={twitter} className="twitter"></img> </a>
                </div>
                
            </div>
                
            
            
        </div>
    )
    };

export default Footer;