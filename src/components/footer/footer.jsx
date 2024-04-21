import './footer.css'
import React from 'react';
import omega_icon from '../navigation/img/omega-icon.svg';
import inst_icon from './img/instagram-icon_grey.svg';

function Header() {
    return (
        <>
            <footer className='footer'>
                <div className='footer-list'>
                    <img src={omega_icon} alt='omega_icon'></img>
                    <div className='listing'>
                        <ul className='list'>
                            <li className='list-title'>Контакты</li>
                            <li className='list-item'>+7 (812) 123-45-67</li>
                            <li className='list-item'>+7 (911) 123-45-67</li>
                            <li className='list-item'>Новоостровский проспект, дом 36 лит. С</li>
                        </ul>
                        <ul className='list'>
                            <li className='list-title'>Режим работы</li>
                            <li className='list-item'>C 10:00 до 21:00 (Пн-Пт)</li>
                            <li className='list-item'>С 11:00 до 20:00 (Сб-Вс)</li>
                        </ul>
                        <ul className='list'>
                            <li className='list-title'>Мы в Instagram</li>
                            <li className='list-item'><a href="#"><img src={inst_icon} alt='inst_icon' /></a></li>
                        </ul>
                    </div>
                </div>
                <p className='copyright'>Copyright © 2017 - 2022</p>
            </footer>

        </>
    );
}

export default Header;