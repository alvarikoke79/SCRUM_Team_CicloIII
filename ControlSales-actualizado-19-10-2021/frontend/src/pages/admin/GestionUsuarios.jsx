import React from 'react'
import {Link} from 'react-router-dom'

const GestionUsuarios = () => {

return(


<div className="box1">
			<p className="tituloGu">Gestion de usuarios</p>
			<section className="SeccionFiltrar">
				<form className="CasillaFiltrar">
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
			<section className="txtIn">
				<form className="Datainput">
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
						</select></form></td><td></td>
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
)



}
export default GestionUsuarios