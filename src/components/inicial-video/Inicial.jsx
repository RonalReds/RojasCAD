import React, { useState } from 'react';
import style from './Inicial.module.css';
import useInterval from '../../utils/useInterval';
import logoRed from '../../assets/image/LogoRed.png';
import PortadaHOME001 from '../../assets/image/PortadaHOME001.jpg';


function Inicial() {

  const textIni = '¡SOLUCIONES EN DISEÑO CAD!'
  /* const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false); */

  /* useInterval(() => {
    if (index < textIni.length && !back) {
      setIndex(prev => prev + 1)
    }else {
      setBack(true)
      setIndex(prev => prev - 1)
      if (index === 1) {
        setBack(false)
      }
    }
  }, 200) */



  return (
    <div>
      <img src={logoRed} alt="Logo" className={style.logo} />
      <div className={style.homeContainer}>
        {/* <h1>{textIni.slice(0, index)}</h1> */}
        <h1 className={style.Titulo}>{textIni}</h1>
      <img src={PortadaHOME001} alt="Logo" className={style.logo2} />
    </div>
    </div>
  )
}

export default Inicial