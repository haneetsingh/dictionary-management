import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header" role="header">
    <nav className="container">
      <ul className="menu">
        <li className="menu-item">
          <NavLink exact to="/" className="menu-link">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/all" className="menu-link">View All</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
