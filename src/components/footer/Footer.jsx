import React from 'react';
import style from './Footer.module.css';
import { IoLogoInstagram } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { TbMailShare } from "react-icons/tb";



function Footer() {
  return (
      <div className={style.container}>
          <IoLogoInstagram />
          <TbMailShare />
          <LuMapPin />
          <h3>ROJAS TecniCAD</h3>
      </div>
  )
}

export default Footer