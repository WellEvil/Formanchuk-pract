import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'; // Импортируем стили

const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <div className={`contactburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="contactline"></div>
                <div className="contactline"></div>
                <div className="contactline"></div>
            </div>
            <div className={`menu main-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/">Главная</Link>
                <Link to="/man">Мужская коллекция</Link>
                <Link to="/women">Женская коллекция</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/aboutUs">О нас</Link>
            </div>

            <div className="contactlogo-container">
                <img src={'/assets/logo.svg'} className="contactlogo" style={{ width: '200px', height: 'auto' }} alt="Логотип магазина" />
            </div>

            <div className="textContact-container">
                <span className="textContact">
                    <span>Мы ждем именно Вас в наших фирменных салонах немецкой обуви</span><br />
                </span>
            </div>

            <div className="contact-container">
                <img src={'/assets/contact.svg'} className="contact" style={{ width: '1300px', height: 'auto' }} />
            </div>

            <div class="social-container">
                <p>Подписывайтесь в соцсетях</p>
                <div class="social-icons">
                    <img src="/assets/vk.svg" />
                    <img src="/assets/instagram.svg" />
                    <img src="/assets/telegram.svg" />
                </div>
            </div>

            <div className="textphone-container">
                <span className="textphone">
                    <span>Телефон офиса:</span><br />
                    <span>+7(385)82-35-77</span><br />
                </span>
            </div>

            <div className="mobile-container">
                <img src={'/assets/mobileContact.svg'} className="mobile" style={{ width: '200px', height: 'auto' }} />
            </div>


        </div>
    );
};
export default ContactPage