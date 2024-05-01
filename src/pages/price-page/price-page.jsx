import React from 'react';
// import Price from './price/price';
import { useEffect, useState } from 'react';
import './price-page.css';
import Pagination from '../../components/pagination/pagination';
function PricePage() {
  const [PriceList, SetPriceList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pricePage] = useState(4);

  useEffect(() => {
    fetch('http://localhost:8000/price/get-list')
      .then((res) => res.json())
      .then((data) => SetPriceList(data))
  }, [])

  useEffect(() => {
  }, [PriceList]);

  const lastPriceIndex = currentPage * pricePage;
  const firstPriceIndex = lastPriceIndex - pricePage;
  const currentPrice = PriceList.slice(firstPriceIndex, lastPriceIndex);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(currentPrice);

  let list = currentPrice.map((elem, index) => {
    return <div key={index} className='data-price-list'>
      <div className='service-price'>
        <p className='service'>{elem.nameService}</p>
        <p className='price-service'>{elem.priceService}</p>
      </div>
      <p className='add-service'>{elem.additionalService}</p>
    </div>
  });

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
            <div className='list'>{list}</div>
          </div>
          <Pagination pricePage={pricePage} total = {PriceList.length} paginate = {paginate}/>
          {/* <div className='price-list-foto'>
            <div className='list'>{getPriceBlock(list, 4, 7)}</div>
            <img src={'/img/price.png'} alt='fotoPrice'></img>
          </div>
          <div className='price-list-foto'>
            <img src={'/img/price.png'} alt='fotoPrice'></img>
            <div className='list'>{getPriceBlock(list, 8, 11)}</div>
          </div> */}
        </section>
      </main>

    </>
  );
}

export default PricePage;