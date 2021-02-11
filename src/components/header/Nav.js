import React from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
