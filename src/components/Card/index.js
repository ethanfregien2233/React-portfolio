import React from 'react';

function Card(props) {
  return (
    <div className="card col-md-5 col-sm-12 ms-4 mb-5 border border-2 border-dark">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="card-body">
        
            <h4 className='card-title'>
                <strong>{props.name}</strong>
            </h4>
            <h5 className='card-text'>
                {props.description}
            </h5>
            <a className='card-link' href={props.url}>Deployed Application   </a>
        
            <a className='card-link' href={props.github}> GitHub Repo</a>
        </div>
    </div>
  );
}

export default Card;