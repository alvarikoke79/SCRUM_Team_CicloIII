import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';


import { obtenerVehiculos, crearVenta, editarVehiculo, eliminarVehiculo } from 'util/api';

import 'react-toastify/dist/ReactToastify.css';

const RegistroVentas = () => {

    const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    await crearVenta(
      {
        id: nuevaVenta.idVenta,
        Fecha: nuevaVenta.fechaVenta,
        Cantidad: nuevaVenta.cantidad,
      },
      (response) => {
        console.log(response.data);
        toast.success('Venta agregada con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando la venta');
      }
    );

    // const options = {
    //   method: 'POST',
    //   url: 'http://localhost:5000/vehiculos/nuevo/',
    //   headers: { 'Content-Type': 'application/json' },
    //   data: { name: nuevoVehiculo.name, brand: nuevoVehiculo.brand, model: nuevoVehiculo.model },
    // };

    // await axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //     toast.success('Vehículo agregado con éxito');
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //     toast.error('Error creando un vehículo');
    //   });

    
  };

  return (
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
						<button className="botonCambios">Registrar Venta</button>
					</div>
				</section>
				
			</div>
  )
}
export default  RegistroVentas;