import '../css/formulario.css';
import { useState, useEffect, useRef } from 'react';

const Formulario = ({ visible, setVisible, pacientes, setPacientes, editPaciente, setEditPaciente}) => {
    // Si no está visible, no renderizamos nada
    //Una variable que guarda el valor del state y set cambia/actualiza el valor del el state
    const [ nombrePaciente, setNombrePaciente ] = useState('');  
    const [ propietario, setPropietario ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ mail, setMail ] = useState('');
    const [ dateRegister, setDateRegister ] = useState('');
    const [ sintomas, setSintomas ] = useState('');
    const [ idPaciente, setIdPaciente ] = useState('');
    const [ mostrarAlerta, setMostrarAlerta ] = useState(false);
    const alertaTimeout = useRef(null);

    useEffect(() => {
        return () => {
            if (alertaTimeout.current !== null) {
                window.clearTimeout(alertaTimeout.current);
            }
        };
    }, []);

    const alerta = ()=> {
        setMostrarAlerta(true);
        if (alertaTimeout.current !== null) {
            window.clearTimeout(alertaTimeout.current);
        }
        alertaTimeout.current = window.setTimeout(() => {
            setMostrarAlerta(false);
            alertaTimeout.current = null;
        }, 5000);
    };

    useEffect(()=> {
        if(Object.keys(editPaciente).length > 0 ){
            setPropietario(editPaciente.propietario);
            setNombrePaciente(editPaciente.nombrePaciente);
            setTel(editPaciente.tel);
            setMail(editPaciente.mail);
            setDateRegister(editPaciente.dateRegister);
            setSintomas(editPaciente.sintomas);
            setIdPaciente(editPaciente.id);
        }
    }, []);

    //Funcion generica para vaciar formulario
    const resetFormulario = ()=> {
        setPropietario('');
        setNombrePaciente('');
        setTel('');
        setMail('');
        setDateRegister('');
        setSintomas('');
    };

    //Asociada a un trigger
    const handleCerrar = ()=> {
        setVisible(false);
        resetFormulario();
        setEditPaciente({});
        setMostrarAlerta(false);
    };

    //Create 5 new states
    //Create 5 new inputs
    //Nombre propietario, correo, telefono, Fecha de alta y sintomas
    //Types= date, tel, email
    //Inputs= input, textArea

    const handleCita = (e)=> {
        e.preventDefault();
        //Validate all fields are required
        if([nombrePaciente.trim(), propietario.trim(), tel.trim(), mail.trim(), dateRegister.trim(), sintomas.trim()].includes('')){
            alerta();
            return;
        }
        
        setMostrarAlerta(false);
        const pacienteActualizado = {
            nombrePaciente: nombrePaciente.trim(),
            propietario: propietario.trim(),
            mail: mail.trim(),
            tel: tel.trim(),
            dateRegister,
            sintomas: sintomas.trim()
        };

        if (idPaciente) {
            pacienteActualizado.id = idPaciente;
            setPacientes((pacientesActuales) =>
                pacientesActuales.map((paciente) =>
                    paciente.id === idPaciente ? pacienteActualizado : paciente
                )
            );
            setEditPaciente({});
            setIdPaciente('');
        } else {
            pacienteActualizado.id = Date.now();
            setPacientes((pacientesActuales) => [...pacientesActuales, pacienteActualizado]);
        }

        resetFormulario();
        setVisible(false);
    }

    return(
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">
                
                <div className='formulario-contenido'>
                    <h1 className="formulario-titulo"> {idPaciente ? 'Editar' : 'Nueva'} <span className='formulario-titulo-bold'> Cita </span></h1>
                </div>

                {mostrarAlerta && (
                    <div className='alerta' role='alert'>
                        <span className='btn-texto-cerrar-alerta'>
                            Todos los campos son obligatorios
                        </span>
                    </div>
                )}

                <button className='btn-cerrar-modal' onClick={(e) => handleCerrar(e)}>
                    <span className='btn-texto-cerrar-modal'>Cerrar</span>
                </button>

                <form onSubmit={(e)=> handleCita(e)}>

                    <div className='formulario-campo'>
                        <label htmlFor='paciente' className='formulario-label'> Nombre del paciente </label>
                        <input id='paciente' type='text' className='formulario-input' placeholder='E.g. Tobby'
                        value = {nombrePaciente} onChange={(e)=> setNombrePaciente(e.target.value)} />

                        <label htmlFor='propietario' className='formulario-label'> Nombre del propietario </label>
                        <input id='propietario' type='text' className='formulario-input' placeholder='E.g. Jorge'
                        value = {propietario} onChange={(e)=> setPropietario(e.target.value)} />

                        <label htmlFor='telefono' className='formulario-label'> Nombre Paciente </label>
                        <input id='telefono' type='number' className='formulario-input' placeholder='Telefono: (3335987848)'
                        value = {tel} onChange={(e)=> setTel(e.target.value)} />

                        <label htmlFor='email' className='formulario-label'> Correo del Paciente </label>
                        <input id='email' type='email' className='formulario-input' placeholder='JorchElninoIT@net.com'
                        value = {mail} onChange={(e)=> setMail(e.target.value)} />

                        <label htmlFor='fecha' className='formulario-label'> Fecha de registro </label>
                        <input id='fecha' type='date' className='formulario-input' placeholder='fecha-de-registro'
                        value = {dateRegister} onChange={(e)=> setDateRegister(e.target.value)} />

                        <label htmlFor='sintomas' className='formulario-label'> Sintomas del paciente </label>
                        <textarea id='sintomas' type='text' className='formulario-input' placeholder='Se cansa rápido, duerme más de lo habitual'
                        value = {sintomas} onChange={(e)=> setSintomas(e.target.value)} />

                    </div>

                    <button type='submit' className='formulario-btn-submit'> {idPaciente ? 'Editar' : 'Agregar'} paciente </button>
                 </form>
            </div>
        </div>
    )
};

export default Formulario;