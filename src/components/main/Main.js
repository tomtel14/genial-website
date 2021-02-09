import React from 'react';
import About from './About';
import Work from './Work';
import './Main.css';

function Main() {
  return (
    <main id="main">
      <div className="app-cont">
        <About />
        <Work />
      </div>
    </main>
  )
}

export default Main;
