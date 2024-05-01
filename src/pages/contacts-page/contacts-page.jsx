import React from 'react';
import './contacts-page.css'

function Contacts() {


  return (
    <>
      <main>
        <h1 className='contacts-header'>Контакты</h1>
        <div className='contacts-map'>
          <img src={'/img/map.png'} alt='Расположение'></img>
        </div>
      </main>
    </>
  );
}

export default Contacts;