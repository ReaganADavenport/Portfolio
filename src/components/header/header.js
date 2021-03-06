import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyles = styled.ul`
    align-items: space-around;
    font-family: 'Amiri', serif;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 20px;
    padding-inline-start: 0px;
    
    a{
        align-items: space-around;
        color: black;
        display: flex;
        justify-content: center;
        margin: 0 0;
        padding: 10px 10px 10px 10px;
        text-decoration: none;
    }
`


const Header = () => {
    return(
        <>
                <div className="navBar">
                    <LinkStyles>
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/about'><b>About Me</b></Link>
                        <Link to='/contact'><b>Contact</b></Link>
                    </LinkStyles>
                </div>
            </>
    )
};

export default Header;