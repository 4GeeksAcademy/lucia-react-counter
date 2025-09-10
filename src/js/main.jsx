import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';

// Variable para contar los segundos
let seconds = 0;

// Función para renderizar el componente
const renderCounter = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>
  );
};

// Renderizar inicialmente
renderCounter();

// Usar setInterval para actualizar cada segundo
setInterval(() => {
  seconds++;
  renderCounter();
}, 1000);