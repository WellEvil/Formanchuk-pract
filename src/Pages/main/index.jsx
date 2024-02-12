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
        <Link to="/man">Мужская коллекция</Link>
        <Link to="/women">Женская коллекция</Link>
        <Link to="/contact">Контакты</Link>
        <Link to="/aboutUs">О нас</Link>
      </div>

      <div className="buttons-container">
        <button className="login-button">Вход</button>
        <button className="register-button">Регистрация</button>
      </div>

      <div className="logo-container">
        <img src={'/assets/logo.svg'} className="logo" style={{ width: '200px', height: 'auto' }} />
      </div>

      <div className="textmain-container">
        <span className="textmain">
          <span>Жизнь проще</span><br />
          <span>в комфортной</span><br />
          <span>обуви</span>
        </span>
      </div>

      <div className="banner1-container">
        <img src={'/assets/banner1.svg'} className="banner1" style={{ width: '600px', height: 'auto' }} />
      </div>

      <div className="banner2-container">
        <img src={'/assets/banner2.svg'} className="banner1" style={{ width: '700px', height: 'auto' }} />
      </div>

      <div class="socialmain-container">
        <p>Подписывайтесь в соцсетях</p>
        <div class="socialmain-icons">
          <img src="/assets/vk.svg" />
          <img src="/assets/instagram.svg" />
          <img src="/assets/telegram.svg" />
        </div>
      </div>

      <div className="banner3-container">
        <img src={'/assets/banner3.svg'} className="banner3" style={{ width: '1300px', height: 'auto' }} />
      </div>

      <div className="otzivi-container">
        <img src={'/assets/otzivi.svg'} className="otzivi" style={{ width: '1300px', height: 'auto' }} />
      </div>

      <button class="submit-button">Оставить отзыв</button>

      <div class="more-about">
    <h2>Больше про Rieker</h2>
    <div class="buttons">
        <button>
            Философия <img src="/assets/next.svg" alt="Next" class="arrow-icon" />
        </button>
        <button>
            Кодекс поведения <img src="/assets/next.svg" alt="Next" class="arrow-icon" />
        </button>
        <button>
            Благотворительность <img src="/assets/next.svg" alt="Next" class="arrow-icon" />
        </button>
    </div>
</div>


    </div>
  );
};

export default MainPage;
