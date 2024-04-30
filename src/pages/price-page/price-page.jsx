import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Price from './price/price';
import Footer from '../../components/footer/footer';
import { useEffect, useState } from 'react';

function PricePage() {
  const [PriceList, SetPriceList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/price/get-list')
      .then((res) => res.json())
      .then((data) => SetPriceList(data))
  }, [])

  useEffect(()=>{
    console.log(PriceList)
  }, [PriceList])

  return (
    <>
      <header>
        <Navigation />
      </header>
      <Price  PriceList={PriceList}/>
      <Footer />
    </>
  );
}

export default PricePage;