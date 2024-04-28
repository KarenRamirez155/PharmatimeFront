import React from "react";
import "./RecoverPassword.css"

const RecoverPassword = () => {
    return(
        <div className="wrapper2">
            <form action="">
                <h1>Recuperar Contraseña</h1>
                <div className="input-box">
                    <p>Correo electrónico</p>
                    <input type="text" placeholder="Correo electrónico" required />
                    <button type="submit">Solicitar código</button>
                </div>
                <div className="input-box">
                    <p>Digite el código</p>
                    <input type="text" placeholder="Codigo" required />
                    <button type="submit">Enviar</button>
                </div>
                <div className="input-box">
                    <p>Digite la nueva contraseña</p>
                    <input type="password" placeholder="Nueva contraseña" required />
                    <button type="submit">Guardar</button>
                </div>
            </form>

        </div>
    )
}

export default RecoverPassword;     