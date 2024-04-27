import React from 'react';
import './price.css'
import dataPrice from './data-price';

function Price() {

    let list = dataPrice.map((elem, index) => {
        return <div key={index} className='data-price-list'>
            <div className='service-price'>
                <p className='service'>{elem.nameService}</p>
                <p className='price-service'>{elem.priceService}</p>
            </div>
            <p className='add-service'>{elem.additionalService}</p>
        </div>
    })

    return (
        <>
            <main>
                <h1 className='title-price'>Цены на услуги</h1>
                <section className='price-list'>
                    <div className='price-list-foto'>
                        <img src={'/img/price.png'} alt='fotoPrice'></img>
                        <div className='list'>{list}</div>
                    </div>
                    <div className='price-list-foto'>
                        <div className='list'>{list}</div>
                        <img src={'/img/price.png'} alt='fotoPrice'></img>
                    </div>
                    <div className='price-list-foto'>
                        <img src={'/img/price.png'} alt='fotoPrice'></img>
                        <div className='list'>{list}</div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Price;