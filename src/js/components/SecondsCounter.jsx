import React from 'react';

const SecondsCounter = ({ seconds }) => {
  // Convertir segundos a un array de dígitos individuales
  const formatSeconds = (time) => {
    return time.toString().padStart(6, '0').split('');
  };

  const digits = formatSeconds(seconds);

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark text-white py-4" style={{minHeight: '200px'}}>
      {/* Icono del reloj de Font Awesome */}
      <div className="me-3">
        <i className="fas fa-clock fa-2x text-white"></i>
      </div>
      
      {/* Contenedor de los dígitos */}
      <div className="d-flex" style={{gap: '8px'}}>
        {digits.map((digit, index) => (
          <div 
            key={index} 
            className="d-flex justify-content-center align-items-center rounded"
            style={{
              width: '60px',
              height: '80px',
              backgroundColor: '#333',
              border: '2px solid #555',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              fontFamily: 'Courier New, monospace',
              color: 'white'
            }}
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter;