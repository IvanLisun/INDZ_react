import React from 'react';
import './Header.css';
import Logo from './Logo';
import DateTime from './DateTime';
import logoImage from './logo192.png';
const Header = (props) => {
  return (
    <header className="header">
      <Logo logoSrc={logoImage} />
        <div className="date-time">
        <DateTime />
        </div>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
