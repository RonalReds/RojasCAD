import ImageGallery from 'react-image-gallery';
import style from './Carrusel.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';



function Carrusel() {
  const images = [
    {
      original: 'https://i.ibb.co/FDtTd6H/Chapa400-001.png',
      thumbnail: 'https://i.ibb.co/FDtTd6H/Chapa400-001.png',
      originalWidth: 1000, // Ancho deseado para la imagen original.
      originalHeight: 400, // Alto deseado para la imagen original.
    },
    {
      original: 'https://i.ibb.co/gmC8fgV/Llanta400-001.png',
      thumbnail: 'https://i.ibb.co/gmC8fgV/Llanta400-001.png',
      originalWidth: 1000, // Ancho deseado para la imagen original.
      originalHeight: 400, // Alto deseado para la imagen original.
    },
    {
      original: 'https://i.ibb.co/8PLwjtP/Pistola400-001.png',
      thumbnail: 'https://i.ibb.co/8PLwjtP/Pistola400-001.png',
      originalWidth: 1000, // Ancho deseado para la imagen original.
      originalHeight: 400, // Alto deseado para la imagen original.
    },
    {
      original: 'https://i.ibb.co/xDQh1jk/Cortadora400-001.png',
      thumbnail: 'https://i.ibb.co/xDQh1jk/Cortadora400-001.png', 
      originalWidth: 1000, // Ancho deseado para la imagen original.
      originalHeight: 400, // Alto deseado para la imagen original.
    },
    {
      original: 'https://i.ibb.co/mTp4p9W/Brazo400-001.png',
      thumbnail: 'https://i.ibb.co/mTp4p9W/Brazo400-001.png.png',
      originalWidth: 1000, // Ancho deseado para la imagen original.
      originalHeight: 400, // Alto deseado para la imagen original.
      }
    ]
    
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>¿NECESITAS hacer planos o diseñar tus productos?</h2>
        <h3>¡Un PROYECTISTA freelance es lo estás buscando! Brindando soporte y asistencia tanto a empresas como a particulares. Ser un aliado en sus proyectos es el objetivo.
        </h3>
      </div>
      <div className={style.carrusel}>
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
      <hr />
    </div>
  )
}

export default Carrusel