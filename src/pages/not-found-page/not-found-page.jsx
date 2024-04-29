import React from 'react';
import './not-found-page.css'
import { Link } from 'react-router-dom';


function NotFoundPage() {


  return (
    <>
      <main className='main'>
        <section className='not-found'>
          <h1 className='not-found__title'>404</h1>
          <p className='not-found__title-descr'>cтраница не найдена</p>
          <p className='not-found__-descr'>страница, на которую вы пытаетесь попасть, не существует или была удалена</p>
          <p className='not-found__-descr'>Перейдите на <Link to="/" className='link'>Главную страницу</Link></p>
        </section>
      </main>
    </>
  );
}

export default NotFoundPage;