import logo1 from './media/logoLG.jpg'
import './estilosLG.css'
import {Link} from 'react-router-dom'

function loginpage() {
  return (
    
        <div className = "mainframe">
        <div className="login">
        <div className="Landing">
          <span className="Txlanding">
            Control sales te permite registrar, y gestionar los produtos de tu
            tienda, tambien permite registrar y gestionar las ventas tanto
            fisicas como virtuales. Si tu empresa ya esta usando control sales,
            accede desde el boton de la derecha con tu cuenta de correo de
            google.
          </span>
        </div>
        <img src={logo1}  alt="logo" />
        <form className="frame_login">
          <input
            className="usuario"
            type="text"
            name="Usuario"
            placeholder="Usuario"
          />
                
          <input
            className="pass"
            type="password"
            name="Contraseña"
            placeholder="Contraseña"
          />
        <div className="Ini_sesion">
        <Link to ='/inicio'>
         <input className="button" type="submit" value="Iniciar Sesion" /> 
        </Link>   
            <span className="O"> O </span>
            <div
              className="g-signin2"
              data-onsuccess="onSignIn"
              data-theme="dark"
            ></div>
        </div>  
          </form>
        </div>
        </div>
     
  );
}

export default loginpage;