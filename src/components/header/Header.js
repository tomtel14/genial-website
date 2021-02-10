import React from 'react';
import BackgroundImage from './BackgroundImage';

function Header({ mobileMode }) {
  return (
    <header id="top">
      <BackgroundImage mobileMode={mobileMode} />
    </header>
  );
}

export default Header;
