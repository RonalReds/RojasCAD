import React from 'react';
import DiseñoImage from '../../assets/image/Diseño.png';
import EquiposImage from '../../assets/image/Equipos.png';
import CursoImage from '../../assets/image/cursos.png';
import style from './Tools.module.css';


const tools = [
    { image: DiseñoImage, title: 'DISEÑO Y RELEVAMIENTO', description: 'Soporte y asistencia remota en todo el país. Modelado 3D. Creación de planos. Diseño Gráfico. Manual de usuario. Realizamos relevamiento in situ. Vea lo que hacemos en la sección Servicios.' },
    { image: EquiposImage, title: 'EQUIPOS DE ALTO RENDIMIENTO', description: 'Contamos con equipos portátiles que nos permiten Diseñar y Renderizar proyectos de gran envergadura.' },
    {image: CursoImage, title: 'CAPACITACION EN SOLIDWORKS', description: 'Aprenda a manejar el software más popular en la industria para desarrollar su productos. Vaya a la sección Capacitaciones.'}
]

function Tools() {
  return (
      <div className={style.container}>
          {tools.map((tool, index) => (
              <div key={index} className={style.divMap}>
                  <img src={tool.image} alt={tool.title} />
                  <hr className={style.line} />
                  <h2>{tool.title}</h2>
                  <p>{tool.description}</p>
              </div>
          ))}
    </div>
  )
}

export default Tools