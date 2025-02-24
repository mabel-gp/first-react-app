import './App.css';
import Testimony from './components/testimony.jsx';
import emmaImage from './images/testimony-emma.png'

// Este es un componente
function App() {  
  return (
    <div className='App'>
      <div className='principal-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimony
        nombre = 'Emma Bostian'
        pais = 'Suecia'
        imagen= {emmaImage}
        cargo= 'Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre me costó aprender JavaScript. Hice muchos cursos, pero el de freeCodeCamp fue el que me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
      </div>
    </div>
  )
}

export default App;
