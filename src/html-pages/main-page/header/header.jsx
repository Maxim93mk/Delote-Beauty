import './header.css'
import React from 'react';
import Navigation from '../../../components/navigation/navigation'



function Header() {


  return (
    <>
    <header className='header'>
        {/* <div className='header'> */}
          <Navigation />  
        {/* </div> */}
        <h1 className='header-title'>Салон красоты «Delote-Beauty» на Крестовском</h1>
    </header>
      
    </>
  );
}

export default Header;