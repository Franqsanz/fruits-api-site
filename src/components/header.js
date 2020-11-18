import React from 'react';
import { Link } from 'react-router-dom';
import { Headers, NavLink, Ul } from '../styles/index';

function Header() {
  return (
    <Headers>
      <nav>
        <Ul>
          <NavLink>
            <Link to="/">HOME</Link>
            <Link to="/docs">DOCS</Link>
            <Link to="/about">ABOUT</Link>
          </NavLink>
        </Ul>
      </nav>
    </Headers>
  )
}

export default Header;