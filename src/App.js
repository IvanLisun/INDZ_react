// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import TodoList from './components/TodoList'; // Імпорт компонента TodoList
import './App.css';
import getId from './components/helpers';

function App() {
  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'External Link', url: 'https://example.com' },
  ];

  // Демонстрація роботи getId
  console.log(getId('menu-item')); // menu-item_1
  console.log(getId('menu-item')); // menu-item_2
  console.log(getId('button'));    // button_1
  console.log(getId());            // key_1
  console.log(getId());            // key_2
  console.log(getId('menu-item')); // menu-item_3

  return (
    <div className="App">
      {/* Компонент Header */}
      <Header title="Header Component" />

      {/* Основне компонування сторінки */}
      <div className="main-layout">
        <SideBar title="My Sidebar" menuList={menuItems} />
        <Content title="Dog Breeds" />
      </div>

      {/* Компонент TodoList */}
      <div className="todo-list-container">
        <TodoList /> {/* Вбудовуємо TodoList */}
      </div>

      {/* Компонент Footer */}
      <Footer title="Footer Menu" menuList={menuItems} />
    </div>
  );
}

export default App;
