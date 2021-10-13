import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../media/logo.jpg'

const Login = () => {
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
           <div><h2 className = 'titleLogin'>Iniciar sesion</h2>
           <form className = 'formLogin' action="">
               <div className ='divinputs'>
               <input className='inpute' type ='email' placeholder = 'dsl@c.com' required/>
               <input className='inputp' type ='password' placeholder = 'password' required/>
               </div>
               <div>
                <label htmlFor="recuerdame">
                <input type="checkbox" />
                recuerdame
                </label>
               </div>
               <div>
                   <Link to ='/'>
                ¿olvidaste tu contraseña?
                   </Link> 
               </div>
               <div>
                   <Link to = '/admin/RegistroProductos'>
                   <button type='submit'>Iniciar sesión</button>
                   </Link>
               </div>
               <div>0</div>
               <div>
                   <button>iniciar con google</button>
               </div>
           </form>
           </div>
           </div>
        </div>
    )
}

export default Login
