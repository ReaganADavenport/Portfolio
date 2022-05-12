import React,{Component} from 'react';
import './drc.css';




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
                        
                    </ul>
                </div>
                {/* <img className='d-img-1' src={mandarin1}></img>
                <img className='d-img-2' src={mandarin2}></img> */}
                <div className='d-block-2'>
                    <h3>Challenges</h3>
                    <ul>

                    </ul>
                </div>
                {/* <img className='d-img-3' src={mandarin3}></img> */}
                <div className='d-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        
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