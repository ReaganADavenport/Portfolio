import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { projectImage, projectName, projectDescript} = this.props;
    
    return(
        <div className="Card">
    
          <img className='ProjectImage' src={projectImage}></img>

          <h3>{projectName}</h3>

          <p>{projectDescript}</p>

          <button type='button'>Learn More</button>
        </div>
    )
  }
}

export default Card;