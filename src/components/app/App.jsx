import './App.css';
import React from 'react';
import {MainPage, TeamPage, PricePage, Contacts} from '../../pages';

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
