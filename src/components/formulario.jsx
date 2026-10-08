import '../css/formulario.css';
import { use, useState } from 'react';

const Formulario = ({ visible, setVisible, pacientes, setPacientes }) => {
    // Si no está visible, no renderizamos nada
    //Una variable que guarda el valor del state y set cambia/actualiza el valor del el state
    const  [ nombrePaciente, setNombrePaciente ] = useState('');  
    const [ propietario, setPropietario ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ mail, setMail ] = useState('');
    const [ dateRegister, setDateRegister ] = useState('');
    const [ sintomas, setSintomas ] = useState('');

    //Create 5 new states
    //Create 5 new inputs
    //Nombre propietario, correo, telefono, Fecha de alta y sintomas
    //Types= date, tel, email
    //Inputs= input, textArea

    const handleCita = (e)=> {
        e.preventDefault();
        //Validate all fields are required
        if([nombrePaciente.trim(), propietario.trim(), tel.trim(), mail.trim(), dateRegister.trim(), sintomas.trim()].includes('')){
            window.alert('Error: Todos los campos son obligatorios')
            return;
        }
        const pacienteAlta = {
            nombrePaciente: nombrePaciente.trim(),
            propietario: propietario.trim(),
            mail: mail.trim(),
            tel: tel.trim(),
            dateRegister,
            sintomas: sintomas.trim()
        };
        console.log(pacienteAlta);

        //Add id
        pacienteAlta.id = Date.now();
        console.log(pacienteAlta);
        setPacientes([...pacientes, pacienteAlta]);
        setVisible(false);
    }

    return(
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">
                
                <div className='formulario-contenido'>
                    <h1 className="formulario-titulo"> Nueva <span className='formulario-titulo-bold'> Cita </span></h1>
                </div>

                <button className='btn-cerrar-modal' onClick={() => setVisible(false)}>
                    <span className='btn-texto-cerrar-modal'>Cerrar</span>
                </button>

                <form onSubmit={(e)=> handleCita(e)}>

                    <div className='formulario-campo'>
                        <label htmlFor='paciente' className='formulario-label'> Nombre del paciente </label>
                        <input id='paciente' type='text' className='formulario-input' placeholder='E.g. Tobby'
                        value = {nombrePaciente} onChange={(e)=> setNombrePaciente(e.target.value)} />

                        <label htmlFor='propietario' className='formulario-label'> Nombre del propietario </label>
                        <input id='propietario' type='text' className='formulario-input' placeholder='E.g. Jorge Tavarez'
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

                    <button type='submit' className='formulario-btn-submit'> Agregar paciente </button>
                 </form>
            </div>
        </div>
    )
};

export default Formulario;