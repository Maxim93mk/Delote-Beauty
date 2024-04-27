import './navigation.css';
import React from 'react';

function Navigation() {



  return (
    <>
      <nav className='navigation'>
        <a href="#">
          <img src='/img/icons/instagram-icon.svg' alt="instagram_icon" />
        </a>
        <a href="#" className='link'>Главная</a>
        <a href="#" className='link'>Мастера</a>
        <a href="#" className='link'>Косметика</a>
        <a href="#">
          <img src='/img/icons/omega-icon.svg' alt="omega_icon" />
        </a>
        <a href="#" className='link'>Акции</a>
        <a href="#" className='link'>Отзывы</a>
        <a href="#" className='link'>Контакты</a>
        <a href="#">
          <img src='/img/icons/burger-icon.svg' alt="burger_icon" />
        </a>
      </nav>
    </>
  );
}

export default Navigation;
