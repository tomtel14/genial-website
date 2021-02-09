import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-scroll';
import './Arrow.css';

function Arrow() {
  return (
    <Link
      activeClass="active"
      to="main"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <BsChevronDown size={80} color="white" className="arrow" />
    </Link >
  );
}

export default Arrow;
