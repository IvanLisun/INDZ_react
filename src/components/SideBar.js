import React from 'react';
import './SideBar.css';
import Menu from './Menu';

const SideBar = (props) => {
  return (
    <aside className="sidebar">
      <h1>{props.title}</h1>
      <Menu list={props.menuList} />
    </aside>
  );
};

export default SideBar;