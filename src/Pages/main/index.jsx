import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'; // Импортируем стили

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu main-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/">Главная</Link>
        <Link to="/aboutUs">О нас</Link>
        <Link to="/contact">Контакты</Link>
        <Link to="/man">Мужская коллекция</Link>
        <Link to="/women">Женская коллекция</Link>
      </div>
    </div>
  );
};

export default MainPage;
