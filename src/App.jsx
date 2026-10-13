import { useState } from 'react';
import './css/app.css';
import Formulario from './components/formulario.jsx'
import Paciente from './components/Pacientes.jsx';
import './css/pacientes.css';

function App() {

  const [visible, setVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  /**
   * Definitions:
   * To pass a child state to antoher component, it should be through PROPS
   */
  const eliminarPaciente = (id)=> {
    const confirmar = window.confirm("Desea eliminar al paciente?");
    console.log(confirmar);

    if(confirmar){
      const pacienteEliminado = pacientes.filter((paciente) => paciente.id !== id);
      setPacientes(pacienteEliminado);
    }
  }

  return (
    <main className = "container">
      <h1 className = "titulo">
        Administrador de citas <span className="titulo-bold"> Veterinario </span>
      </h1>
      <button type='button' className='btn-nueva-cita' onClick={() => setVisible(true)}> 
        <span className="btn-texto-nueva-cita"> Nueva cita </span>
      </button>

      {pacientes.map((paciente)=> 
          <Paciente 
            setVisible={setVisible}
            pacientes={pacientes}
            paciente={paciente}
            eliminarPaciente={eliminarPaciente}
            key={paciente.id}
          />
      )}

       {visible && (
        <Formulario 
          visible={visible} 
          setVisible={setVisible} 
          pacientes={pacientes} 
          setPacientes={setPacientes}
        />
      )}

    </main>
  )
}

export default App
