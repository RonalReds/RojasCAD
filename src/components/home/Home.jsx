import React from 'react';
import style from './Home.module.css';
import Inicial from '../inicio-nav/Inicial';
import Nav from '../nav/Nav';
import Carrusel from '../carrucel/Carrusel';
import Tools from '../tools/Tools';
import Brand from '../brand/Brand';
import Footer from '../footer/Footer';

 

function Home() {
  return (
    <div className={style.homeContainer}>
       <Nav />
      <Inicial />
      <Carrusel />
      <Tools />
      <Brand />
      <Footer/>
      
    </div>
  )
}

export default Home;
