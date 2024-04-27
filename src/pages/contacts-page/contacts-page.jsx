import React from 'react';
import './contacts-page.css'
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';

function Contacts() {


  return (
    <>
      <header>
        <Navigation />
      </header>
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