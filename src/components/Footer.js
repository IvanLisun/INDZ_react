import React from 'react';
import './Footer.css';
import Menu from './Menu';

const Footer = (props) => {
  return (
    <footer className="footer">
      <h1>{props.title}</h1>
      <Menu list={props.menuList} />
    </footer>
  );
};

export default Footer;