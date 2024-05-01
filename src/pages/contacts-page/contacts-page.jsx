import React from 'react';
import './contacts-page.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contacts() {


  return (
    <>
      <Header />
      <main>
        <h1 className='contacts-header'>Контакты</h1>
        <div className='contacts-map'>
          <img src={'/img/map.png'} alt='Расположение'></img>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contacts;