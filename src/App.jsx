import './App.css';
import Testimony from './components/testimony.jsx';

function App() {  // Este es un componente
  return (
    <div className='App'>
      <div className='principal-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimony/>
      </div>
    </div>
  )
}

export default App;
