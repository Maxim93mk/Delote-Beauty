import './navigation.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navigation() {



  return (
    <>
      <nav className='navigation'>
        <Link to="/">
          <img src='/img/icons/instagram-icon.svg' alt="instagram_icon" />
        </Link>
        <Link to="/" className='link'>Главная</Link>
        <Link to="/team" className='link'>Мастера</Link>
        <Link to="/" className='link'>Косметика</Link>
        <Link to="/">
          <img src='/img/icons/omega-icon.svg' alt="omega_icon" />
        </Link>
        <Link to="/price" className='link'>Акции</Link>
        <Link to="/" className='link'>Отзывы</Link>
        <Link to="/contacts" className='link'>Контакты</Link>
        <Link to="/">
          <img src='/img/icons/burger-icon.svg' alt="burger_icon" />
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
