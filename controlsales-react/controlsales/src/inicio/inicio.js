
import './inicio.css';
import logo from './media/logo.jpg'
import {Link} from 'react-router-dom'
function Inicio() {
    return (
      <div id="main-container">
  
          <div id="containerlogueo">
  
              <div className="box">
                  <Link to ='/'> <section className="logo">
                      <img src={logo} alt ="logo" className="imgprincipal"/>
                  </section></Link>
                 
                  <div className="modulo">
                      <p>Modulo administrador de productos:</p>
                      <div className="botonlat">
                          <Link to='/RegistroProducto'>Registro de Productos</Link>
                      </div>
                      <div className="botonlat">
                          <a href="">Maestro de Productos</a>
                      </div>
                  </div>
                  <div className="modulo">
                      <p>Modulo administrador de ventas:</p>
                      <div className="botonlat">
                      <Link to  = '/RegistrodVentas'>Registro de Ventas</Link>
                      </div>
                      <div className="botonlatMV">
                          <Link to = '/maestrodVentas'>Maestro de Ventas</Link>
                      </div>
                  </div>
                  <div className="modulo1">
                      <div className="botonlat">
                      <Link to  = '/GestionUsuario'>Gestion de usuarios</Link>
                      </div>
                  </div>
                  <div className="salir">
                      <div className="botonlat1">
                          <a href="">Cerrar Sesión</a>
                      </div>
                  </div>
  
  
              </div>
              
          </div>
      </div>
    );
  }
  
  export default Inicio;