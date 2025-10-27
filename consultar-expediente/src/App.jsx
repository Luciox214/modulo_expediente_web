import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ResultsDisplay from './components/ResultDisplay';

function App() {
  // Estado para los campos del formulario
  const [anio, setAnio] = useState('');
  const [numero, setNumero] = useState('');
  const [codigo, setCodigo] = useState('');

  // Estado para los resultados
  const [expedientes, setExpedientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Estado para saber si ya se buscó algo
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setExpedientes([]);
    setHasSearched(true); // Marcamos que ya se hizo una búsqueda

    const params = new URLSearchParams({
      page: '0',
      size: '20' 
    });

    if (anio) params.append('anio', anio);
    if (numero) params.append('numero', numero);
    if (codigo) params.append('codigo', codigo);

    try {
      const url = `http://localhost:8080/api/expedientes?${params.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setExpedientes(data);

    } catch (err) {
      setError(err.message);
      console.error("Error al buscar expedientes:", err);
    } finally {
    
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h2>Consulta Expedientes</h2>
      <SearchForm 
        anio={anio}
        setAnio={setAnio}
        numero={numero}
        setNumero={setNumero}
        codigo={codigo}
        setCodigo={setCodigo}
        onSubmit={handleSubmit}
      />
      <ResultsDisplay 
        loading={loading}
        error={error}
        expedientes={expedientes}
        hasSearched={hasSearched}
      />
    </div>
  )
}

export default App;