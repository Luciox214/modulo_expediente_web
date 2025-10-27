import React from 'react';

function SearchForm({ anio, setAnio, numero, setNumero, codigo, setCodigo, onSubmit }) {
  return (
    <div className='container'>
      <div className='formulario'>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='anio'>Año de Expediente</label>
            <input
              type="number"
              id='anio'
              placeholder='Ej: 2025'
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="numeroExpediente">Número de Expediente</label>
            <input
              type="number"
              id='numeroExpediente'
              placeholder='Ej: 12345'
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="codigoReparticion">Código de Repartición</label>
            <input
              type="text"
              id='codigoReparticion'
              placeholder='Ej: GER'
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          
          <button type="submit" className='btn-submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;