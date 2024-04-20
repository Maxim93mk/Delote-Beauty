import './css/navigation.css';
import React from 'react';
import instagram_icon from './img/instagram-icon.svg';
import omega_icon from './img/omega-icon.svg'
import burger_icon from './img/burger-icon.svg'

function Navigation() {



  return (
    <>
      <nav className='navigation'>
        <a href="#">
          <img src={instagram_icon} alt="instagram_icon" />
        </a>
        <a href="#" className='link'>Главная</a>
        <a href="#" className='link'>Мастера</a>
        <a href="#" className='link'>Косметика</a>
        <a href="#">
          <img src={omega_icon} alt="omega_icon" />
        </a>
        <a href="#" className='link'>Акции</a>
        <a href="#" className='link'>Отзывы</a>
        <a href="#" className='link'>Контакты</a>
        <a href="#">
          <img src={burger_icon} alt="burger_icon" />
        </a>
      </nav>
    </>
  );
}

export default Navigation;
