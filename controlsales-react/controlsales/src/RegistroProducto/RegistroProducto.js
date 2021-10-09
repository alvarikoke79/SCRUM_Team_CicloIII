import logo from './imagenes/logo.jpg'
import zapatos from './imagenes/oxford_cognac2_small.jpg'
import './estilosRP.css'
import {Link} from 'react-router-dom'

function registroProducto() {
    return(

<div id="main-container">

	<div id="containerlogueo">

		<div className="box">
			<section className="logo">
            <Link to ='/'> <section className="logo">
                      <img src={logo} alt ="logo" className="imgprincipal"/>
                  </section></Link>
			</section>
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
					<a href="">Registro de Ventas</a>
				</div>
				<div className="botonlat">
					<a href="">Maestro de Ventas</a>
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
            <p className="interfaz_RegProducto">Registro de productos</p>
            <div img source={zapatos} alt="zapatos"> </div>
			<div className="columna1">
                <div className="IdProducto">
                    <p>Crear ID del Producto</p>
					<input type="text" name="user" required />
					<input type="submit" value="Crear"/>
            	</div>

            <div className="descripcion">
                <p>Descripción del Producto</p>
				<input type="text" name="user"/>
				
            </div>

			<div className="Idproducto1">
				<form className="">
					<label>
						Estado:
					<select>
						<option>Disponible</option>
						<option>No Disponible</option>
					</select>
					</label>
				</form>
				
				<p>Valor Unitario:
				<input type="text" name="user" />
				</p>
			</div>

			<div className="botonRegistrar">
				<input type="submit" value="Registrar"/>
			</div>
           
            </div>
			
		</div>		
	</div>
</div>
    );
}
export default registroProducto;