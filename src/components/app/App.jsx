import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage, TeamPage, PricePage, Contacts, NotFoundPage } from '../../pages';

function App() {

  return (
    <>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/price' element={<PricePage />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
