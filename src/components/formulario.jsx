import '../css/formulario.css';

const Formulario = ({ visible, setVisible }) => {
    // Si no está visible, no renderizamos nada
    if (!visible) return null;

    return(
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">
                <div className='formulario-contenido'>
                    <h2 className="formulario-titulo">Hola mundo desde formulario! :D</h2>
                </div>
                <button className='btn-cerrarModal' onClick={() => setVisible(false)}>
                    <span className='btn-texto-cerrar-modal'>Cerrar</span>
                </button>
            </div>
        </div>
    )
};

export default Formulario;