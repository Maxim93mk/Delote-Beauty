import './header.css'
import React from 'react';
import Navigation from '../navigation/navigation'
import mouse_icon from './img/mouse_icon.svg'


function Header() {


    return (
        <>
            <header className='header'>
                <Navigation />
                <h1 className='header-title'>Салон красоты «Delote-Beauty» на Крестовском</h1>
                <a href='#' className='scroll-down-group'>
                    <img src={mouse_icon} alt="mouse_icon" />
                    <p className='scroll-down-group__img-descr'>Прокрутите вниз</p>
                </a>
            </header>

        </>
    );
}

export default Header;