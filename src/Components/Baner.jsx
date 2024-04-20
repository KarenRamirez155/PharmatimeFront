import React from 'react'
import logo from './Assets/logo_captura.png'
import './Baner.css';

export const Baner = () => {
  return (
    <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            {/* Puedes agregar más contenido aquí si lo necesitas */}
        </header>
  )
}
export default Baner;