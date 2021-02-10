import React, { useState, useEffect } from 'react';
import About from './About';
import Work from './Work';
import './Main.css';
import BackToTop from './BackToTop';

function Main() {

  const [upArrow, setUpArrow] = useState(false);

  const showArrow = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 400) {
      setUpArrow(true)
    } else {
      setUpArrow(false)
    }
  };

  useEffect(() => {
    showArrow();
    window.addEventListener('scroll', showArrow)

    return () => {
      window.removeEventListener('scroll', showArrow)
    }
  }, [])

  return (
    <main id="main">
      <div className="app-cont">
        <About />
        <Work />
        {upArrow ? <BackToTop /> : null}
      </div>
    </main>
  )
}

export default Main;
