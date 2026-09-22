import { useState } from 'react';
import './css/app.css';

function App() {

  const [visible, setModalVisible] = useState(false)
  return (
    <main className = "container">
      <h1 className = "titulo">
        Administrador de citas <span className="titulo-bold"> Veterinario </span>
      </h1>
      <button type='button' className='btn-nueva-cita' onClick={() => setModalVisible(true)}> 
        <span className="btn-texto-nueva-cita"> Nueva cita </span>
      </button>
    </main>
  )
}

export default App
