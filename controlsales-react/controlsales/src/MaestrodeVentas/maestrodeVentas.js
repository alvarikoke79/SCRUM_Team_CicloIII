import logo from './media/logo.jpg'
import editar from './media/editar.png'
import './estilosMV.css'
import {Link} from 'react-router-dom'

function maestrodeVentas(){
    return(

    <div id="main-container">

        <div id="containerlogueo">

            <div className="box">
                <Link to ='/'>
                <section className="logo">
                    <img src={logo} alt ="logo" className="imgprincipal"/>
                </section>
                </Link>
                
                
                <div className="modulo">
                    <p>Modulo administrador de productos:</p>
                    <div className="botonlat">
                        <a href="">Registro de Productos</a>
                    </div>
                    <div className="botonlat">
                        <a href="">Maestro de Productos</a>
                    </div>
                </div>
                
                <div className="modulo">
                    <p>Modulo administrador de ventas:</p>
                    <div className="botonlat">
                        <Link to  = '/RegistroDeVenta'>Registro de Ventas</Link>
                    </div>
                    <div className="botonlatMV">
                        <Link to  = '/maestrodVentas'>Maestro de Ventas</Link>
                    </div>
                </div>
                <div className="modulo1">
                    <div className="botonlat">
                        <a href="">Gestión de Usuarios</a>
                    </div>
                </div>
                <div className="salir">
                    <div className="botonlat1">
                        <a href="">Cerrar Sesión</a>
                    </div>
                </div>


            </div>
            <div className="box1">
                <p className="MVtitle">Maestro de ventas</p>
                <section className="seccionFiltrar">
                    <form className="casillaFiltar">
                        <label>
                            Filtar por: 
                            <select>
                                <option>Documento de indetidad</option>
                                <option>ID venta</option>
                                <option>Nombre cliente</option>
                            </select>
                        </label>
                    </form>
                </section>
                <p className="P1">Documento sin puntos ni comas</p>
                <section className="DI">
                    <form className="inputDI">
                        <label>
                            <input type="text" placeholder="1029384736"/>
                            <button className="botonBuscar" type="submit">Buscar </button>
                        </label>
                    </form>
                </section>
                <section className="table-container">

                    <table>
                        <thead>
                            <tr>
                                <th>ID Venta</th><th>Fecha venta</th><th>D.I. Cliente</th><th>Total venta</th><th>Estado</th><th>Editar</th>
                            </tr>
                        </thead>
            
                        <tr>
                            <td>103049</td><td>12/10/2021</td><td>1060582298</td><td>$ 300,000</td><td><form><select>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>entregada</option>
                            </select></form></td><td><a href=""><img src={editar} alt="editar" className="imgeditar"/></a></td>
                        </tr>
                        <tr>
                            <td>103050</td><td>13/10/2021</td><td>1060582201</td><td>$ 400,000</td><td><form><select>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>entregada</option>
                            </select></form></td><td><a href=""><img src={editar} alt="editar" className="imgeditar"/></a></td>
                        </tr>
                        <tr>
                            <td>103051</td><td>14/10/2021</td><td>1060542245</td><td>$ 500,000</td><td><form><select>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>entregada</option>
                            </select></form></td><td><a href=""><img src={editar} alt="editar" className="imgeditar"/></a></td>
                        </tr>
                        <tr>
                            <td>103052</td><td>15/10/2021</td><td>1053582275</td><td>$ 600,000</td><td><form><select>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>entregada</option>
                            </select></form></td><td><a href=""><img src={editar} alt="editar" className="imgeditar"/></a></td>
                        </tr>
                    </table>
                </section>
                <section className="Cambios">
                    <label>
                        Guardar los cambios de estado de las ventas
                        <button className="botonCmabios">Guardar cambios</button>
                    </label>
                </section>

                
            
                
            </div>		
        </div>
    </div>

    );
}

export default maestrodeVentas;