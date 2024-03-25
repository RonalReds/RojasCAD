import React from 'react';
import style from './Footer.module.css';
import { IoLogoInstagram } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { TbMailShare } from "react-icons/tb";
import Logo from "../../assets/image/LogoRed.png";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.iconContainer1}>
        <IoLogoInstagram className={style.icons} />
        <span>@migueCAD</span>
      </div>
      <div className={style.iconContainer}>
        <TbMailShare className={style.icons} />
        <span>migueCAD@gmail.com</span>
      </div>
      <div className={style.iconContainer}>
        <LuMapPin className={style.icons} />
        <span>Buenos Aires, Argentina</span>
      </div>
      <div className={style.logoFooter}>
        <img src={Logo} alt="Logo" />
        <span className={style.logoFooteSpan}>©RojasCAD Todos los derechos reservados 2024</span>
      </div>
    </div>
  )
}

export default Footer;
