import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../static/logo.png';

const Header = ({ name }) => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Manchester Codes Icon" />
      <h1 className="header__title">Testing React with RTL</h1>
      <div className="header__author">by {name}</div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
