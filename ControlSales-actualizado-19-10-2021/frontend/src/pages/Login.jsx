import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../media/logo.jpg'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className = 'mainLogin'>
           <div className = 'txtLogin'>
            <span className='txtlanding'>Control sales te permite registrar, y gestionar los produtos de tu
            tienda, tambien permite registrar y gestionar las ventas tanto
            fisicas como virtuales. Si tu empresa ya esta usando control sales,
            accede desde el boton de la derecha con tu cuenta de correo de
            google.</span>
           </div>
           <div className = 'mainform'>
           <img className='logologin' src={Logo}  alt="logo" />
           
           <form className = 'formLogin' action="">           
                   <button
                   className = 'buttonsl' 
                   type='submit'
                   onClick={() => loginWithRedirect()}
                   >Iniciar sesión</button>        
           </form>

           </div>
        </div>
    )
}

export default Login
