import React from 'react';
import style from './Cursos.module.css';
import CursoNav from '../../cursoNav/CursoNav';
import CursoPlanes from '../../cursoPlanes/CursoPlanes';
import Footer from '../../footer/Footer';






function Cursos() {
  return (
    <div>
      <CursoNav /> 
      <CursoPlanes />
      <Footer/>
    </div>
  )
}

export default Cursos