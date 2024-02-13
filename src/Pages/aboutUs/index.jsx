import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const AboutUsPage = () => {
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

            <div className="logo-container">
                <img src={'/assets/logo.svg'} className="logo" style={{ width: '200px', height: 'auto' }} alt="Логотип магазина" />
            </div>

            <div className="company-history-container">
                <div className="company-history-text">
                    <p className="bold-text">История компании</p>
                    <p className="semi-bold-text">Основанная в 1874 году обувная фабрика Rieker получила свою первоначальную популярность у зажиточных жителей северной Италии.</p>
                    <p>Вскоре Rieker получает всеобщую популярность во всей Центральной Европе благодаря идеальной репутации качественного производства обуви. Непрестанная работа над выявлением и удовлетворением потребностей клиентов приводит компанию Rieker к непрерывному 30-летнему росту на обувном рынке!</p>
                    <p>В начале 1970-х годов состоялось открытие Рикер Холдинг на территории Швейцарии и производство компании Rieker вышло на мировой уровень. В настоящее время штат Rieker насчитывает около 20 000 сотрудников по всему миру. Большая часть сотрудников находится в Марокко, Словакии, Тунисе и Вьетнаме, где расположены крупнейшие производственные предприятия компании Rieker.</p>
                    <p>Мы поставляем обувь и аксессуары более, чем в 9000 магазинов розничной торговли Европы, США и Стран Азии.</p>
                </div>
            </div>

            <div className="company-prime-container">
                <div className="company-prime-text">
                    <p className="bold-text">Преимущества</p>
                    <p className="semi-bold-text">Обувь марки Rieker - это не только внешнее отражение модных тенденций. Особые черты марки превращают обувь Rieker в гораздо большее, чем просто обувь! Специальные технологии производства в сочетании с легкими и эластичными компонентами высокого качества делают каждую пару Rieker антистресс - обувью! Отличие обуви Rieker от обуви для спорта в том, что наша обувь предназначена для ощущения чувства Вашего ежедневного, непревзойденного комфорта при носке в течение всего дня, а не для кратковременной активности. Обувь торговой марки Rieker, всегда, разработана в соответствии с последними модными тенденциями и удовлетворит любые потребности покупателя, благодаря инновационным технологиям производства! </p>
            </div>
            </div>

            <div className="history-button">
                <img src={'/assets/play.svg'} style={{ width: '60px', height: 'auto' }} alt="Наша история" />
                <span>Наша история</span>
            </div>

        </div>
    );
};
export default AboutUsPage