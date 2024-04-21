import React from 'react';
import './price-page.css'
import Navigation from '../../components/navigation/navigation';
import Price from './price/price';
import Footer from '../../components/footer/footer';

function PricePage() {


  return (
    <>
      <header>
        <Navigation />
      </header>
      <Price />
      <Footer />
    </>
  );
}

export default PricePage;