import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { projectImage, projectName, projectDescript, projectLink} = this.props;
    
    return(
        <div className="Card">
    
          <img className='ProjectImage' src={projectImage}></img>

          <h3>{projectName}</h3>

          <p>{projectDescript}</p>

          <a href={projectLink}><button type='button'>Learn More</button></a>
        </div>
    )
  }
}

export default Card;