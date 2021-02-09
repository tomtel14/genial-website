import React from 'react';
import './Work.css';
import clients from '../../data/clients';
import WorkCard from './WorkCard.js';

function Work() {
  return (
    <div className="work-cont">
      <h3>Work</h3>
      <p>At present we are not taking on any new clients.
Nonetheless, below is a selection of websites Genial are still updating and/or maintaining:</p>
      <div className="work-gallery-cont">
        {clients.map((client) => {
          return <WorkCard key={client.id} clientObject={client} />
        })}
      </div>
    </div>
  );
}

export default Work;
