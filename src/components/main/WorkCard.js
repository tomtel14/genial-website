import React from 'react';
import './WorkCard.css';

function WorkCard({ clientObject }) {
  const { img, heading, text, url } = clientObject;
  return (

    <div className="grid">
      <figure className="effect">
        <img src={img} alt={heading}></img>
        <a href={url} target='_blank' rel="noreferrer"><div className="overlay"></div></a>
        <figcaption>
          <h5>{heading}</h5>
          <p>{text}</p>
          <a href={url} target='_blank' rel="noreferrer">View more</a>
        </figcaption>
      </figure>
    </div>

  );
}

export default WorkCard;
