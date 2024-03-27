import React from 'react';
import style from './CursoNav.module.css';


function CursoNav() {
  return (
      <div className={style.container}>
          <div className={style.containerTexto}>
          <h1>Cursos de diseño CAD</h1>
          <p>
              Formación online, 100% práctica, con soporte de especialistas y certificado a tu nombre.
          </p>
          </div>
          <div className={style.containerSpan}>
              <span>🎥 Clases practicas</span>
              <span>🎓 Certificados</span>
              <span>🔔 Soporte</span>
              
          </div>

    </div>
  )
}

export default CursoNav