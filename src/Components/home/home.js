import React,{Component} from 'react';
import './home.css';



const Home = () => {
    return(
        <div className="Home">
            <div className='block'>
                <h1>Hi, I'm Reagan!</h1>
                <h3>I'm a Full-Stack Developer in Atlanta, GA</h3>
                <a href='/portfolio'><button className='big-button'>Checkout My Porfolio Here</button></a>
            </div>
        </div>
    )
}

export default Home;