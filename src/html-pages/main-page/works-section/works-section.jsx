import './works-section.css'
import React from 'react';

function WorksSection() {

    return (
        <>
            <section className='works'>
                <h2 className='works-title'>Наши работы</h2>
                <ul className='works-nav'>
                    <li><a href='#' className='works-nav-links'>Показать все</a></li>
                    <li><a href="#" className='works-nav-links'>Парикмахерские услуги</a></li>
                    <li><a href="#" className='works-nav-links'>Маникюр</a></li>
                    <li><a href="#" className='works-nav-links'>Педикюр</a></li>
                </ul>
            </section>
        </>
    );
}

export default WorksSection;