import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { projectImage, projectName} = this.props;
    
    return(
        <div className="Card">
    
          <img className='ProjectImage' src={projectImage}></img>

          <h2>{projectName}</h2>

          <button type='button'>Learn More</button>
        </div>
    )
  }
}

export default Card;