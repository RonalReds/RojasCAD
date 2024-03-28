import ImageGallery from 'react-image-gallery';
import style from './Carrusel.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import cortadora from '../../assets/image/Cortadora.jpg';
import { Link } from "react-router-dom";




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
  
  const thumbnailStyle = {
    borderRadius: '50%', // Redondea los bordes de los thumbnails
    border: '2px solid red', // Añade un borde blanco
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)', // Añade una sombra
    transition: 'transform 0.3s', // Añade una transición suave
  };
    
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>¿NECESITAS hacer planos o diseñar tus productos?</h2>
        <p>¡Un PROYECTISTA freelance es lo estás buscando! Brindando soporte y asistencia tanto a empresas como a particulares. Ser un aliado en sus proyectos es el objetivo.
        </p>
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
        thumbnailStyle={thumbnailStyle}
      />
      </div>
      <img src={cortadora} alt="" className={style.corta} />
      <Link to={'/contact'} className={style.linck}>
        <span className={style.btn}>Contacto</span>
      </Link>
      <hr />
    </div>
  )
}

export default Carrusel