import React from 'react';
import style from './Brand.module.css';
import AGS from '../../assets/image/Clientes/AGS.jpg';
import ASSTEC from '../../assets/image/Clientes/ASSTEC.jpg';
import BALD from '../../assets/image/Clientes/BALD.jpg';
import CICOLD from '../../assets/image/Clientes/CICOLD.jpg';
import CODYMARC from '../../assets/image/Clientes/CODYMARC.jpg';
import KSB from '../../assets/image/Clientes/KSB.jpg';
import SEALED from '../../assets/image/Clientes/SEALED.jpg';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';





function Brand() {
    const images = [
        {
          original: AGS,
          thumbnail: ASSTEC,
          originalWidth: 1000, // Ancho deseado para la imagen original.
          originalHeight: 300, // Alto deseado para la imagen original.
        },
        {
          original: BALD,
          thumbnail: BALD,
          originalWidth: 1000, // Ancho deseado para la imagen original.
          originalHeight: 300, // Alto deseado para la imagen original.
        },
        {
          original: CICOLD,
          thumbnail: CICOLD,
          originalWidth: 1000, // Ancho deseado para la imagen original.
          originalHeight: 300, // Alto deseado para la imagen original.
        },
        {
          original: CODYMARC,
          thumbnail: CODYMARC,
          originalWidth: 1000, // Ancho deseado para la imagen original.
          originalHeight: 300, // Alto deseado para la imagen original.
        },
        {
          original: KSB,
          thumbnail: KSB,
          originalWidth: 1000, // Ancho deseado para la imagen original.
          originalHeight: 300, // Alto deseado para la imagen original.
        },
        {
            original: SEALED,
            thumbnail: SEALED,
            originalWidth: 1000, // Ancho deseado para la imagen original.
            originalHeight: 300, // Alto deseado para la imagen original.
            }
        ]
   

    return (
        <div className={style.container}>
            <h2>Clientes que confían en nuestro trabajo.</h2>
            <div className={style.brandList}>
            <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                showNav={false}
                autoPlay={true}
                showThumbnails={true}
                thumbnailPosition='bottom'
                slideInterval={3000}
                slideDuration={1000}
            />
            </div>
        </div>
    )
}

export default Brand;
