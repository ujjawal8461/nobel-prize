import React from 'react';
import './Card.css';


const Card = (props) => {
  return <div className="card">
    <div>
    <img className="card-image" src="/assets/coinImg.png" alt="Image 2" />
    </div>
    
    <div className='card-content'>
    <p className='card-content-year' >{props.year}</p>

    <hr className='line' />

      <p className='card-content-ctg' >
        The Nobel Prize in { props.category } { props.year }
      </p>

      <p className='card-content-names' >
        { props.names }
      </p>
      
      <p className='card-content-motive' >
        { props.motive }
      </p>
      </div>
  </div>;
};

export default Card;