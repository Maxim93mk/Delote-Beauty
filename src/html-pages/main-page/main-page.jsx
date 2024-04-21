import React from 'react';
import './main-page.css'
import Header from '../../components/header/header'
import ServicesSection from './services-section/services-section';
import WorksSection from './works-section/works-section';
import Footer from '../../components/footer/footer'
function MainPage() {


  return (
    <>
      <Header />
      <main className='main'>
        <ServicesSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;