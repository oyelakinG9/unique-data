import React from 'react';
import logo from '../assets/favicon.ico';

const Footer = () => {
  const footerLogo = {
    width: '2rem',
    margin: '0 1rem',
  };

  const link = {
    fontSize: '0.7rem',
    color: '#000',
    marginLeft: '0.5rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <div className="footer text-center">
      <small>
        Copyright &copy; Corona Tracker
        <img
          src={logo}
          alt="Logo"
          className="footer-logo"
          style={footerLogo}
        />
        Made by
        <a href="https://github.com/Oyelaking9" style={link} target="_blank" rel="noreferrer">OyelakinG ❤</a>
      </small>
    </div>
  );
};

export default Footer;
