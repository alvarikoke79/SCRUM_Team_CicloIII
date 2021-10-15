import React from 'react'
import {Link} from 'react-router-dom'

const MaestroVentas = () => {

    return(
        
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
                            </select></form></td><td></td>
                        </tr>
                        
                    </table>
                </section>
                <section className="Cambios">
                    <label>
                        Guardar los cambios de estado de las ventas
                        <button className="botonCambios">Guardar cambios</button>
                    </label>
                </section>

                
            </div>	
    )
}
export default MaestroVentas;