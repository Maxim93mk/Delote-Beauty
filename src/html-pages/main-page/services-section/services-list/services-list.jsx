import './services-list.css'
import React from 'react';
import data from './data-services'

function ServicesList() {

    let cards = data.map((elem) => {
        return <div className='card'>
            <div className='card-border'></div>
            <figure className='service-item'>
                <img src={elem.img}></img>
                <figcaption className='service-item-descr'>{elem.name}</figcaption>
            </figure>
        </div>

    });

    return (
        <>
            <div className='services-cards'>
                {cards}
            </div>
        </>
    );
}

export default ServicesList;