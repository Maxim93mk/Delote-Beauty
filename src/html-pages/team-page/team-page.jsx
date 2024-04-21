import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Masters from './team/team';
import Footer from '../../components/footer/footer';

function TeamPage() {


  return (
    <>
      <header>
        <Navigation />
      </header>
      <Masters />
      <Footer />
    </>
  );
}

export default TeamPage;