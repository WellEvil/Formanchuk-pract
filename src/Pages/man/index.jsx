import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'; // Импортируем стили

const ManPage = () => {
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
                <Link to="/man">Мужская коллекция</Link>
                <Link to="/women">Женская коллекция</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/aboutUs">О нас</Link>
            </div>

            <div className="buttons-container">
                <button className="login-button">Избранное</button>
            </div>

            <div className="logo-container">
                <img src={'/assets/logo.svg'} className="logo" style={{ width: '200px', height: 'auto' }} alt="Логотип магазина" />
            </div>

            <div className="text-container">
                <span className="text">
                    <span>Вы сможете</span><br />
                    <span>подобрать обувь на</span><br />
                    <span>любой вкус!</span>
                </span>
            </div>

        <div className="manCollection-container">
        <img src={'/assets/manCollection.svg'} className="manCollection" style={{ width: '1300px', height: 'auto' }} />
        </div>


        </div>
    );
};
export default ManPage