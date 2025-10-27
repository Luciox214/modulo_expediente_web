import React from 'react';
import Spinner from './Spinner';

// Función para formatear la fecha (puedes ajustarla)
const formatDate = (dateString) => {
  if (!dateString) return '';
  // La fecha de Oracle puede venir con .0 al final
  const date = new Date(dateString.split('.')[0]);
  return date.toLocaleDateString('es-AR') + ' ' + date.toLocaleTimeString('es-AR');
}

function ResultsDisplay({ loading, error, expedientes, hasSearched }) {

  // 1. Mostrar el Spinner si está cargando
  if (loading) {
    return <Spinner />;
  }

  // 2. Mostrar el error si lo hubo
  if (error) {
    return <div className="error-box">Error al conectar con la API: {error}</div>;
  }

  // 3. Mostrar "sin resultados" si ya buscó y no hay nada
  if (hasSearched && expedientes.length === 0) {
    return <div className="results-container">No se encontraron resultados.</div>;
  }

  // 4. No mostrar nada si aún no ha buscado
  if (expedientes.length === 0) {
    return null; 
  }

  // 5. ¡Mostrar los resultados!
  // Extraemos la data del cabezal del primer documento (el [0])
  const header = expedientes[0];

  return (
    <div className="results-container">
      {/* Cabecera del Expediente (Puntos 1-4) */}
      <div className="exp-header">
        <h1 className="exp-title">{header.DESCRIPCION}</h1> 
        <div className="exp-info">
          <span><strong>Estado:</strong> {header.ESTADO}</span> 
          <span><strong>Fecha de inicio:</strong> {formatDate(header.FECHA_CREACION)}</span>
          <span><strong>Número del tramite:</strong> {header.EXPEDIENTE}</span>
        </div>
      </div>

      {/* Pestañas (solo visual, sin lógica) */}
      <div className="tabs">
        <button className="tab-active">Documentos</button>
        <button className="tab-inactive">Tareas</button>
        <button className="tab-inactive">Trámites asociados</button>
      </div>

      {/* Tabla de Documentos (Punto 5) */}
      <div className="docs-table">
        <table>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Referencia</th>
              <th>Fecha de asociación</th>
              <th>Fecha de creación</th>
            </tr>
          </thead>
          <tbody>
            {expedientes.map((doc, index) => (
              <tr key={index}>
                <td>{doc.NUMERO}</td>
                <td>{doc.MOTIVO}</td>
                <td>{formatDate(doc.FECHA_ASOCIACION)}</td>
                <td>{formatDate(doc.FECHA_CREACION)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsDisplay;