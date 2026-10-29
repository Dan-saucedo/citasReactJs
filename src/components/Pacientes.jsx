import '../css/formulario.css';

const Paciente = ({
        setVisible,
        pacientes,
        paciente,
        eliminarPaciente,
        editarPaciente
}) => {

// parametros espacio para guardar algo
// argumentos caja llena
//handle: ejecuta una accion

    const handleEditar = () => {
        setVisible(true);
        console.log(pacientes)
        editarPaciente(paciente.id);
    }
    const handleEliminar = () => {
        //Tomar la funcion de eliminar y pasar el id
        eliminarPaciente(paciente.id);
    }   
    return(

        <div className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre">{paciente.nombrePaciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.dateRegister}</p>

            <div className="paciente-contenedor-botones">
                <button
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar()}
                    >Editar
                </button>

                <button
                    className="paciente-btn paciente-btn-eliminar" 
                    onClick={()=> handleEliminar()}
                    >Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;