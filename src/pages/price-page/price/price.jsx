import React from 'react';
import './price.css'

function Price({ PriceList }) {

    let list = PriceList.map((elem, index) => {
        return <div key={index} className='data-price-list'>
            <div className='service-price'>
                <p className='service'>{elem.nameService}</p>
                <p className='price-service'>{elem.priceService}</p>
            </div>
            <p className='add-service'>{elem.additionalService}</p>
        </div>
    })

    const getPriceBlock = (list, min, max) => {
        return list.filter((elem, index) => {
            if (index >= min && index <= max) {
                return elem;
            }
        });
    }

    return (
        <>
            <main>
                <h1 className='title-price'>Цены на услуги</h1>
                <section className='price-list'>
                    <div className='price-list-foto'>
                        <img src={'/img/price.png'} alt='fotoPrice'></img>
                        <div className='list'>{getPriceBlock(list, 0, 3)}</div>
                    </div>
                    <div className='price-list-foto'>
                        <div className='list'>{getPriceBlock(list, 4, 7)}</div>
                        <img src={'/img/price.png'} alt='fotoPrice'></img>
                    </div>
                    <div className='price-list-foto'>
                        <img src={'/img/price.png'} alt='fotoPrice'></img>
                        <div className='list'>{getPriceBlock(list, 8, 11)}</div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Price;