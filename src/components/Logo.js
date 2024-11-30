import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Logo = ({ logoPath }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logoPath} alt="Logo" style={{ height: '40px' }} />
      </Link>
    </div>
  );
};

// Функція для отримання даних зі сховища
const mapStateToProps = (state) => ({
  logoPath: state.logo.logoPath,
});

// Підключення компонента до Redux
export default connect(mapStateToProps)(Logo);
