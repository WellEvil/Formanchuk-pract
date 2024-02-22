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
            <div className={`manburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="manline"></div>
                <div className="manline"></div>
                <div className="manline"></div>
            </div>
            <div className={`menu main-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/">Главная</Link>
                <Link to="/man">Мужская коллекция</Link>
                <Link to="/women">Женская коллекция</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/aboutUs">О нас</Link>
            </div>

            <div className="manbuttons-container">
                <button className="manlogin-button">Избранное</button>
            </div>

            <div className="manlogo-container">
                <img src={'/assets/logo.svg'} className="manlogo" style={{ width: '200px', height: 'auto' }} alt="Логотип магазина" />
            </div>

            <div className="mantext-container">
                <span className="mantext">
                    <span>Вы сможете</span><br />
                    <span>подобрать обувь на</span><br />
                    <span>любой вкус!</span>
                </span>
            </div>

        <div className="manCollection-container">
        <img src={'/assets/manCollection.svg'} className="manCollection" style={{ width: '1300px', height: 'auto' }} />
        </div>

        <div className="mobilemanCollection-container">
        <img src={'/assets/mobilemanCollection.svg'} className="mobilemanCollection" style={{ width: '200px', height: 'auto' }} />
        </div>

        <div className="manlike-container">
        <img src={'/assets/like.svg'} className="manlike" style={{ width: '50px', height: 'auto' }} />
        </div>


        </div>
    );
};
export default ManPage