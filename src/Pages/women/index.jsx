import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'; // Импортируем стили

const WomenPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <div className={`womenburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="womenline"></div>
                <div className="womenline"></div>
                <div className="womenline"></div>
            </div>
            <div className={`menu main-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/">Главная</Link>
                <Link to="/man">Мужская коллекция</Link>
                <Link to="/women">Женская коллекция</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/aboutUs">О нас</Link>
            </div>

            <div className="womenbuttons-container">
                <button className="womenlogin-button">Избранное</button>
            </div>

            <div className="womenlogo-container">
                <img src={'/assets/logo.svg'} className="womenlogo" style={{ width: '200px', height: 'auto' }} alt="Логотип магазина" />
            </div>

            <div className="womentext-container">
                <span className="womentext">
                    <span>Вы сможете</span><br />
                    <span>подобрать обувь на</span><br />
                    <span>любой вкус!</span>
                </span>
            </div>

        <div className="womenCollection-container">
        <img src={'/assets/womenCollection.svg'} className="womenCollection" style={{ width: '1300px', height: 'auto' }} />
        </div>

        <div className="mobilewomenCollection-container">
        <img src={'/assets/mobilewomencollection.svg'} className="mobilewomenCollection" style={{ width: '200px', height: 'auto' }} />
        </div>

        <div className="womenlike-container">
        <img src={'/assets/like.svg'} className="womenlike" style={{ width: '50px', height: 'auto' }} />
        </div>


        </div>
    );
};
export default WomenPage