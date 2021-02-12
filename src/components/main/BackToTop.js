import React from 'react';
import './BackToTop.css';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { Link } from 'react-scroll';

function BackToTop() {
  return (
    <Link
      to="top"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <IoIosArrowDropupCircle className="top" size={52} color="#C74B02" />
    </Link>
  );
}

export default BackToTop;
