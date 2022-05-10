import React from 'react';
import './navbar.css'

import logo from '../../Images/logo.png'

const Navbar = () => {
    return(
        <div className='Nav'>
            <div className='Logo'>
                <a href='/'><img src={logo}></img></a>
            </div>
            <div className='Links'>
                <p>About</p>
                <a href='/portfolio'><p>Portfolio</p></a>
                <a href='/contact'><p>Contact</p></a>
            </div>
            
        </div>
    )
    };

export default Navbar;