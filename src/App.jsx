import { useState } from 'react';
import './css/app.css';
import Formulario from './components/formulario.jsx'

function App() {

  const [visible, setVisible] = useState(false)
  return (
    <main className = "container">
      <h1 className = "titulo">
        Administrador de citas <span className="titulo-bold"> Veterinario </span>
      </h1>
      <button type='button' className='btn-nueva-cita' onClick={() => setVisible(true)}> 
        <span className="btn-texto-nueva-cita"> Nueva cita </span>
      </button>

      <Formulario visible={visible} setVisible={setVisible}/>
    </main>
  )
}

export default App
