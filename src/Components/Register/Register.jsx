import React from "react";
import './Register.css';
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const regreso = () => { navigate("/Login"); }
    return (
        <body id="Register1">

        <div className='wrapper1'>
            <form action="">

                {/* campos del formulario */}

                <div className="input-box left">
                    <input type="text" placeholder="Nombres" required />
                    <BiUser className="icon" />
                </div>
                <div className="input-box right">
                    <input type="text" placeholder="Identificación" required />
                    <BiUser className="icon" />
                </div>
                <div className="input-box right">
                    <input type="text" placeholder="Edad" required />
                    <BiUser className="icon" />
                </div>
                <div className="input-box right">
                    <input type="password" placeholder="Contraseña" required />
                    <BiUser className="icon" />
                </div>
                <div className="text-below">
                    <span>Mínimo 8 caracteres, 1 mayúscula, 1 número, 1 caracter especial (!#$%&)</span>
                </div>
                <div className="input-box  left">
                    <input type="text" placeholder="Apellidos" required />
                    <BiUser className="icon" />
                </div>
                <div className="input-box  left">
                    <input type="text" placeholder="Teléfono" required />
                    <BiUser className="icon" />
                </div>
                <div className="input-box left">
                    <input type="text" placeholder="Correo electrónico" required />
                    <BiUser className="icon" />
                </div>
                
                {/* botones seguidos */}
                <div class="button-container">
                    <div><button type='submit'>¿YA TIENES UNA CUENTA?</button></div>
                    <div><button type='submit'>CREAR CUENTA</button></div>
                </div>

            </form>

        </div>
        </body>

    );
};
export default Register;
