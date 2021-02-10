import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {

  const [mobileMode, setMobileMode] = useState(true);

  const showNav = () => {
    if (window.innerWidth >= 731) {
      setMobileMode(false)
    } else {
      setMobileMode(true)
    }
  };

  useEffect(() => {
    showNav();
    window.addEventListener('resize', showNav)

    return () => {
      window.removeEventListener('resize', showNav)
    }
  }, [])

  return (
    <>
      <Header mobileMode={mobileMode} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
