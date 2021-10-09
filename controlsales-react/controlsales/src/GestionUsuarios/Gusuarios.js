import logo from './media/logo.jpg'
import eliminar from './media/eliminar.png'
import './estilosGU.css'
import {Link} from 'react-router-dom'

function Gusuarios(){
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
				<p>Gestion de Usuarios:</p>
				<div className="botonlat">
				<Link to  = '/RegistrodVentas'>Registro de Ventas</Link>
				</div>
				<div className="botonlat">
                <Link to  = '/maestrodVentas'>Maestro de Ventas</Link>
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
		<div className="box1">
			<p className="MVtitle">Gestion de usuarios</p>
			<section className="seccionFiltrar">
				<form className="casillaFiltar">
					<label>
						Buscar: 
						<select>
							<option>Documento de indetidad</option>
							<option>codigo</option>
							<option>Nombre del usuario</option>
							<option>Estado</option>
						</select>
					</label>
				</form>
			</section>
			<section className="DI">
				<form className="inputDI">
					<label>
						<input type="text" placeholder="numeros sin (.) 0 (,)"/>
						<button className="botonBuscar" type="submit">Buscar </button>
					</label>
				</form>
			</section>
			<div className = "tabla">
			<section class="table-container">

				<table>
					<thead>
						<tr>
							<th>C.C</th><th>Nombre</th><th>Apellido</th><th>Rol</th><th>Estado</th><th>Eliminar</th>
						</tr>
					</thead>
		
					<tr>
						<td>1098618881</td><td>Jhon Alexander</td><td>Hernandez Amaya</td><td>
							<form><select>   
							<option>Administrador</option>
							<option>vendedor</option>
						</select></form></td><td>
							<form><select>
							<option>Autorizado</option>
							<option>Pendiente</option>
							<option>No autorizado</option>
						</select></form></td><td><a href=""><img src={eliminar} alt="eliminar" className="imgeliminar"/></a></td>
					</tr>
					<tr>
						<td>1098618881</td><td>Jhon Alexander</td><td>Hernandez Amaya</td><td>
							<form><select>   
							<option>Administrador</option>
							<option>vendedor</option>
						</select></form></td><td>
							<form><select>
							<option>Autorizado</option>
							<option>Pendiente</option>
							<option>No autorizado</option>
						</select></form></td><td><a href=""><img src={eliminar} alt="eliminar" className="imgeliminar"/></a></td>
					</tr>
					<tr>
						<td>1098618881</td><td>Jhon Alexander</td><td>Hernandez Amaya</td><td>
							<form><select>   
							<option>Administrador</option>
							<option>vendedor</option>
						</select></form></td><td>
							<form><select>
							<option>Autorizado</option>
							<option>Pendiente</option>
							<option>No autorizado</option>
						</select></form></td><td><a href=""><img src={eliminar} alt="eliminar" className="imgeliminar"/></a></td>
					</tr>
				</table>
			</section>
		</div>
			<section class="Cambios">
				<label>
					
					<button class="botonCambios">Guardar cambios</button>
				</label>
			</section>
		</div>		
	</div>
</div>
);
}

export default Gusuarios;