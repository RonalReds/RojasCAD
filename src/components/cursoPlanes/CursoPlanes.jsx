import React from 'react';
import style from './CursosPlanes.module.css';


function CursoPlanes() {

    const planes = [
        { name: 'Plan RED', description: 'Aprendé a editar videos verticales con CapCut desde tu celular y PC. Utilizar la interfaz, keyframes, textos, audio y más.', precio: '$180.000 ARS' },
        { name: 'Plan Blue', description: 'Aprendé a editar videos verticales con CapCut desde tu celular y PC. Utilizar la interfaz, keyframes, textos, audio y más.', precio: '$180.000 ARS' },
        { name: 'Plan Gray', description: 'Aprendé a editar videos verticales con CapCut desde tu celular y PC. Utilizar la interfaz, keyframes, textos, audio y más.', precio: '$180.000 ARS' },
        { name: 'Plan Green', description: 'Aprendé a editar videos verticales con CapCut desde tu celular y PC. Utilizar la interfaz, keyframes, textos, audio y más.', precio: '$180.000 ARS' },
        {name: 'Plan Yellow', description: 'Aprendé a editar videos verticales con CapCut desde tu celular y PC. Utilizar la interfaz, keyframes, textos, audio y más.', precio: '$180.000 ARS'}
    ]







  return (
      <div className={style.coitainerMaster}>
          <div className={style.coitainerTex}>
            <h3>Cursos Disponibles</h3>
            <p>Diseña tus proyectos con el programa mas usado de la industria!!</p>
          </div>
          <div className={style.coitainerAllPlan}>
          {planes.map((plan, index) => (
              <div className={style.coitainerPlan} key={index}>
                  <h4>{plan.name}</h4>
                  <p>{plan.description}</p>
                  <span>{plan.precio}</span>
                  <button>Comprar curso</button>
              </div>
          ))}
          </div>
          
          
        
    </div>
  )
}

export default CursoPlanes