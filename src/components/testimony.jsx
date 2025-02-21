import emmaImage from '../images/testimony-emma.png';
import '../style-sheets/testimony.css';

// Componente Funcional (es una fx de JS)

function Testimony(){
  // Un componente funcional retorna un elemento jsx
  return(
    // Contenedor principal
    <div className='container-testimony'>
      <img className='image-testimony' 
      src={emmaImage}
      alt='Imagen de Emma'/>
      <div className='container-text-testimony'>
        <p className='name-testimony'>Emma Bostian en Suecia</p>
        <p className='job-testimony'>Ingeniera de Software en Spotify</p>
        <p className='text-testimony'>
          Siempre me costó aprender JavaScript. Hice muchos cursos, pero el de freeCodeCamp fue el que me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p>
      </div>
    </div>
  );
}

// default => Testimony es el único componente que se va a exportar de este archivo
export default Testimony;