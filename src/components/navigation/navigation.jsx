import './navigation.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navigation() {



  return (
    <>
      <nav className='navigation'>
        <a href="#">
          <img src='/img/icons/instagram-icon.svg' alt="instagram_icon" />
        </a>
        {/* <Link to="/main" className='link'>Главная</Link>
        <Link to="team" className='link'>Мастера</Link>
        <a href="#" className='link'>Косметика</a>
        <a href="#">
          <img src='/img/icons/omega-icon.svg' alt="omega_icon" />
        </a>
        <Link to="price" className='link'>Акции</Link>
        <a href="#" className='link'>Отзывы</a>
        <Link to="contacts" className='link'>Контакты</Link>
        <a href="#">
          <img src='/img/icons/burger-icon.svg' alt="burger_icon" />
        </a> */}
      </nav>
    </>
  );
}

export default Navigation;
