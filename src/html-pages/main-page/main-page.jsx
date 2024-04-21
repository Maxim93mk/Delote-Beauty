import React from 'react';
import './main-page.css'
import Header from '../../html-pages/main-page/header/header'
import ServicesSection from './services-section/services-section';
import WorksSection from './works-section/works-section';

function MainPage() {


  return (
    <>
      <Header />
      <main className='main'>
        <ServicesSection />
        <WorksSection />
      </main>
    </>
  );
}

export default MainPage;