import React from 'react';
import './BackgroundImage.css'
import Title from './Title';
import Arrow from './Arrow';

function BackgroundImage() {
  return (
    <div className="bg-image">
      <div className="empty-div"></div>
      <div className="app-cont">
        <Title />
      </div>
      <Arrow />
    </div>
  );
}

export default BackgroundImage;
