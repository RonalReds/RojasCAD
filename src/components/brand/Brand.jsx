import React from 'react';
import style from './Brand.module.css';
import AGS from '../../assets/image/Clientes/AGS.jpg'
import ASSTEC from '../../assets/image/Clientes/ASSTEC.jpg'
import  BALD from '../../assets/image/Clientes/BALD.jpg'
import CICOLD from '../../assets/image/Clientes/CICOLD.jpg'
import CODYMARC from '../../assets/image/Clientes/CODYMARC.jpg'
import KSB from '../../assets/image/Clientes/KSB.jpg'
import SEALED from '../../assets/image/Clientes/SEALED.jpg'

function Brand() {

    const brands = [{ marca: AGS}, { marca: ASSTEC}, { marca:BALD}, { marca:CICOLD}, { marca:CODYMARC}, {marca:KSB}, {marca:SEALED}]

    return (
        <div className={style.container}>
            <h2>Clientes que confían en nuestro trabajo.</h2>
            <div className={style.brandList}>
                {brands.map((brand, index) => (
                    <div key={index} className={style.divMap}><img src={brand.marca} alt='Logo' className={style.brandList} /></div>
                ))}
            </div>
        </div>
    )
}

export default Brand;
