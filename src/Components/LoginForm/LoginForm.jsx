import React from 'react';
import './LoginForm.css';

import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";

const LoginForm = () => {
    return(
        <body id='login1'>


        <div className='wrapper'>
            <form action=''>
                
                
                <div><LuLogIn className='icon1'/></div>
                
                <div className='input-box'>
                    <input type='text' placeholder='USUARIO' required/>
                    <CiUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='CONTRASEÑA' required/>
                    <IoLockClosedOutline className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label>¿Olvidaste tu contraseña?</label>
                    <a href='#'>Recupérala</a>
                </div>

                <div><button type='submit'>INGRESAR</button></div>
                <div><button type='submit'>¿NO TIENES UNA CUENTA? ¡REGÍSTRATE!</button></div>   
                
            </form>
        </div>

        </body>

    )
}

export default LoginForm;