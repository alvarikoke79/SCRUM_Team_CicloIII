import logo from '../media/logo.jpg'
import './css/styles.css'
import {Link} from 'react-router-dom'

function RegistroDeVenta(){
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
					<div className="botonlatMV">
						<Link to  = '/RegistroDeVenta'>Registro de Ventas</Link>
					</div>
					<div className="botonlat">
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
				<p className="MVtitle">Registro de Ventas</p>
				<section className="seccionFiltrar">
					<form className="casillaFiltar">
						<label className="casillaFiltarLabel">
							Información de la venta 
						</label>
					</form>
				</section>
				<section className="DI">
					<form className="inputDI">
						<p>
							<label className="label-form">ID Venta: </label>
							<input className="input-registro" type="text" placeholder="103049"/>
							<label className="label-form">Valor Total: </label>
							<input className="input-registro" type="text" placeholder="$ 20.000"/>
						</p>
						<p>
							<label className="label-form">Cantidad: </label>
							<input className="input-registro" type="text" placeholder="5"/>
							<label className="label-form">Precio Unitario: </label>
							<input className="input-registro" type="text" placeholder="$ 4.000"/>
						</p>
						<p>
							<label className="label-form">Fecha de Venta: </label>
							<input className="input-registro" type="date"/>
						</p>
					</form>
				</section><br/><br/><br/><br/><br/><br/><br/>

				<section className="seccionFiltrar">
					<form className="casillaFiltar">
						<label className="casillaFiltarLabel">
							Información del Cliente 
						</label>
					</form>
				</section>
				<section className="DI">
					<form className="inputDI">
						<p>
							<label className="label-form">Documento de Identificación: </label>
							<input className="input-registro" type="text" placeholder="23456789"/>
							<label className="label-form">Nombre del Cliente: </label>
							<input className="input-registro" type="text" placeholder="Julio Guevara"/>
						</p>
					</form>
				</section><br/>

				<section className="seccionFiltrar">
					<form className="casillaFiltar">
						<label className="casillaFiltarLabel">
							Información del Vendedor
						</label>
					</form>
				</section>
				<section className="DI">
					<form className="inputDI">
						<p>
							<label className="label-form">Documento de Identificación: </label>
							<input className="input-registro" type="text" placeholder="123432121"/>
							<label className="label-form">Nombre del Vendedor: </label>
							<input className="input-registro" type="text" placeholder="Tatiana Gomez"/>
						</p>
					</form>
				</section><br/><br/>


				<section className="Cambios">
					<div className="btn-cambios">
						<button className="botonCmabios">Registrar Venta</button>
					</div>
				</section>

				
			
				
			</div>		
		</div>
	</div>

    );
}

export default RegistroDeVenta;