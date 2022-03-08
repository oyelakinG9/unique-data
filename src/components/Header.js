import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="fantastic-logo" />
    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo">Covid-19&apos; Update</h1></Link>
    <nav className="nav">
      <ul className="navBar">
        <li className="nav-link books">
          <Link to="update" style={{ textDecoration: 'none' }}>Unique data</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
