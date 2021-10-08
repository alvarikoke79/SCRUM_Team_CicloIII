import './estilos.css'
import logo from '../logo.jpg'
import {Link} from 'react-router-dom'

function MaestroProd(){
    return(
        <div id="main-container">
            <div id="containerlogueo">
                <div className="box">
                    <Link to ='/'>
                    <section className="logo">
                        <img src={logo} className="imgprincipal"/>
                    </section>
                    </Link>
                    <div className="modulo">
                        <p>Modulo administrador de productos:</p>
                        <div className="botonlat">
                            <a href>Registro de Productos</a>
                        </div>
                        <div className="botonlat2">
                            <Link to= '/maestrodProduct'>Maestro de Productos</Link>
                        </div>
                    </div>
                    <div className="modulo">
                        <p>Modulo administrador de ventas:</p>
                        <div className="botonlat">
                            <a href>Registro de Ventas</a>
                        </div>
                        <div className="botonlat">
                            <a href>Maestro de Ventas</a>
                        </div>
                    </div>
                    <div className="modulo1">
                        <div className="botonlat">
                            <a href>Gestión de Usuarios</a>
                        </div>
                    </div>
                    <div className="salir">
                        <div className="botonlat1">
                            <a href>Cerrar Sesión</a>
                        </div>
                    </div>
                </div>
                <div className="box1">
                    <div className="columna1">
                        <p className="titulo">Maestro de Productos</p>
                        <div className="Idproducto">
                            <p>ID de producto:</p>
                            <input type="text" name="user" required />
                            <input type="submit" Value="Buscar" />
                        </div>
                        <div className="Idproducto1">
                            <p>Valor Unitario:</p>
                            <input type="text" name="user" />
                        </div>
                        <div className="Idproducto1">
                            <p>Estado:</p>
                            <input type="text" name="user" />
                        </div>
                        <div className="DetalleProducto">
                            <p>Descripción del producto:</p>
                            <input type="text" name="user" />
                        </div>
                        <div className="botonEditar">
                            <input type="submit" Value="Editar" />
                            <input type="submit" Value="Guardar" />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default MaestroProd;