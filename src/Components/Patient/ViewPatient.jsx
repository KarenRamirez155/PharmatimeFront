import React from 'react'
import "./ViewPatient.css";
import Table from '../Table/Table';

const ViewPatient = () => {
  return (
    <body id='patient1'>
        <div className='header'></div>
        
            <div className='menu'>
                <ul>
                    <li>
                        <button type='submit'>Pacientes</button>
                    </li>
                    <li>
                        <button type='submit'>Asignar medicamentos</button>
                    </li>
                    <li>
                        <button type='submit'>Horario</button>
                    </li>
                </ul>
            </div>
            <div className='additional'>
                <div className='additional-content'>
                    <p>Lista de pacientes</p>
                    <div><button type='submit'>Crear Nuevo Paciente</button></div>
                </div>
                
            </div>
            <div className='table'>
                <Table />
            </div>
        
        
        
    </body>
  )
}

export default ViewPatient
