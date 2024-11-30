import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} text={item.text} url={item.url} />
        ))}
      </ul>
    </nav>
  );
};

// Функція для отримання даних зі сховища
const mapStateToProps = (state) => ({
  menuItems: state.menu.menuItems,
});

// Підключення компонента до Redux
export default connect(mapStateToProps)(Menu);

