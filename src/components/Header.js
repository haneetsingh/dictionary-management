import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header" role="header">
    <nav className="container">
      <ul className="menu">
        <li className="menu-item">
          <NavLink exact to="/" replace className="menu-link">Home</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
