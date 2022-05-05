import React from 'react';
import './navbar.css'

import logo from '../../Images/logo.png'

const Navbar = () => {
    return(
        <div className='Nav'>
            <div className='Logo'>
                <img src={logo}></img>
            </div>
            <div className='Links'>
                <p>About</p>
                <p>Portfolio</p>
                <p>Contact</p>
            </div>
            
        </div>
    )
    };

export default Navbar;