import React,{Component} from 'react';
import './shop.css';
import shop1 from '../../Images/shop1.png';
import shop2 from '../../Images/shop2.png';
import shop3 from '../../Images/shop3.png';



const Shop = () => {
    return(
        <div className="Shop">
            <h1>Flower Shop App</h1>
            <div className='content'>
                <div className='highlights'>
                    <h2>Highlights:</h2>
                    <p>React, HTML, CSS, JavaScript</p>
                </div>
                <div className='s-block-1'>
                    <h3>Project Goal</h3> 
                    <p>My aim with this project was: </p>
                    <ul>
                        <li>To build an ecommerce user-interface, that was beautiful and intuitive</li>
                        <li>To get more comforable with CSS Grid</li>
                        <li>To make a shopping cart with a badge showing the number of items in the cart</li>
                    </ul>
                </div>
                <img className='s-img-1' src={shop1}></img>
                <img className='s-img-2' src={shop2}></img>
                <div className='s-block-2'>
                    <h3>Challenges</h3>
                    <ul>
                        <li>Deciding where and how to begin to create the badge for the shopping cart</li>
                        <li>Getting CSS Grid to look propotional</li>
                        <li>Getting the app to be responsive</li>
                        <li>Finding a background image that would suit the app</li>
                    </ul>
                </div>
                <img className='s-img-3' src={shop3}></img>
                <div className='s-block-3'>
                    <h3>What I Learned</h3>
                    <ul>
                        <li>how to build a shopping cart with a badge that displays the number of items in the cart</li>
                        <li>how to use CSS Grid</li>
                        <li>finding the right background image is essential to creating the right atmosphere</li>
                    </ul>
                </div>
                <div className='s-block-4'>
                    <h4>Checkout My Code Here:</h4>
                    <a href="https://github.com/ReaganADavenport/Shop-app"><p>GitHub Shop Application</p></a>
                    
                    <h4>Checkout the Demo Video:</h4>
                    <a href='https://www.youtube.com/shorts/tGFI4b5Hnog'><p>Shop App Demo</p></a>

                    <h4>Checkout My Medium Article About this App</h4>
                    <a href='https://medium.com/@reagan.a.davenport/how-to-create-a-shopping-cart-with-a-badge-34ec6dafe40f'><p>How to Create a Shopping Cart with a Badge 🛒</p></a>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Shop;