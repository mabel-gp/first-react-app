import '../style-sheets/testimony.css';
/* eslint-disable react/prop-types */ //Desactivar validación de tipos de props


// Componente Funcional (es una fx de JS)
function Testimony(props) {
  // Elemento jsx es todo lo que retorna el componente funcional
  // Este componente está recibiendo props como arg
  return(
    // Contenedor principal
    <div className='container-testimony'>
      <img className='image-testimony' 
      src={props.imagen}
      alt={`Imagen de ${props.nombre}`} />
      <div className='container-text-testimony'>
        <p className='name-testimony'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='job-testimony'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='text-testimony'>
          {props.testimonio}</p>
      </div>
    </div>
  );
}

// default => Testimony es el único componente que se va a exportar de este archivo
export default Testimony;
