import './App.css'

function App() {
  function handleSubmit(){
    alert("hola")
  }
  return (
    <>
    <h2>Consulta Expedientes</h2>
    <div className='container'>
      <div className='formulario'>
      <form >
        <div>
          <label htmlFor='anio'>Año de Expediente</label>
          <input type="number" id='anio' placeholder='EX-'/>
        </div>
        <div>
          <label htmlFor="numeroExpediente">Número de Expediente</label>
          <input type="number" id='numeroExpediente' placeholder='-' />
        </div>      
        <div>
          <label htmlFor="codigoReparticion">Código de Repartición</label>
          <input type="string" id='cofigoReparticion' placeholder='GER' />
        </div>
        
      </form>
      <button className='btn-submit' onClick={()=>{handleSubmit()}}>Enviar</button>
      </div>
    </div>

    </>
  )
}

export default App
