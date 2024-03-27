import React, { useState } from 'react';
import style from './Nav.module.css';
import { Link } from "react-router-dom";

function Nav() {
  // Estado para almacenar qué botón está seleccionado
  const [selectedButton, setSelectedButton] = useState('Registrarse');

  // Función para cambiar el botón seleccionado
  const handleMouseEnter = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className={style.navContainer}>
      <Link to={'/'} className={style.linck}>
      <h4
        className={selectedButton === 'Registrarse' ? style.selected : ''}
        onMouseEnter={() => handleMouseEnter('Registrarse')}>Inicio</h4>
      </Link>
      
      <h4
        className={selectedButton === 'Servicios' ? style.selected : ''}
        onMouseEnter={() => handleMouseEnter('Servicios')}>Registrarse</h4>
      <Link to={'/cursos'} className={style.linck}>
        <h4 className={selectedButton === 'Cursos' ? style.selected : ''}
        onMouseEnter={() => handleMouseEnter('Cursos')}>Cursos</h4>
      </Link>
      <Link to={'/contact'} className={style.linck}>
        <h4 className={selectedButton === 'Contactos' ? style.selected : ''}
        onMouseEnter={() => handleMouseEnter('Contactos')}>Contactos</h4>
      </Link>
    </div>
  );
}

export default Nav;
