// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Для React 18 і вище
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Створюємо кореневий елемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеримо додаток з обгортками для Redux і Router
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Запускаємо вимірювання продуктивності
reportWebVitals();
