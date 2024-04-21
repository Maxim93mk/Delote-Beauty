import './App.css';
import React from 'react';
import MainPage from '../../html-pages/main-page/main-page';
import TeamPage from '../../html-pages/team-page/team-page';
import PricePage from '../../html-pages/price-page/price-page';
import Contacts from '../../html-pages/contacts-page/contacts-page';

function App() {

  return (
    <>
      <div className='container'>
        <MainPage />
        <TeamPage/>
        <PricePage />
        <Contacts />
      </div>

    </>
  );
}

export default App;
