import '../css/formulario.css';

const Paciente = ({
        setVisible,
        pacientes,
        paciente
}) => {

// parametros espacio para guardar algo
// argumentos caja llena

    const handleEditar = () => {
        setVisible(true);
        console.log(pacientes)
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
                    className="paciente-btn paciente-btn-eliminar">
                        Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;