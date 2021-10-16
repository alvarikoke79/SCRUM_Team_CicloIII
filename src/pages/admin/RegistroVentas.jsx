import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { crearVenta } from 'util/api';
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
        idVenta: nuevaVenta.idVenta,
        ValorTotalVenta: nuevaVenta.ValorTotalVenta,
        CantidadVent: nuevaVenta.CantidadVent,
        precioUniVenta: nuevaVenta.precioUniVenta,
        fechaVenta: nuevaVenta.fechaVenta,
        ccCliente: nuevaVenta.ccCliente,
        nombreCliente: nuevaVenta.nombreCliente,
        ccVendedor: nuevaVenta.ccVendedor,
        nombreVendedor: nuevaVenta.nombreVendedor
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
					<form className="inputForm" ref={form} onSubmit={submitForm}>
						<div className ='infoVenta'>
						<label className="titleInfVenta">
							Información de la venta 
						</label>
							<label className="label-form">ID Venta: </label>
							<input className="input-registro" type="text" placeholder="103049" name='idVenta'/>
							<label className="label-form">Valor Total: </label>
							<input className="input-registro" type="text" placeholder="$ 20.000" name='ValorTotalVenta'/>
						
							<label className="label-form">Cantidad: </label>
							<input className="input-registro" type="text" placeholder="5" name = 'CantidadVenta'/>
							<label className="label-form">Precio Unitario: </label>
							<input className="input-registro" type="text" placeholder="$ 4.000" name='precioUniVenta'/>
						
							<label className="label-form">Fecha de Venta: </label>
							<input className="input-registro" type="date" name='fechaVenta'/>
						</div >
						<section className = 'infoClientes'>
							<label className="labelinfoCliente">
							Información del Cliente 
							</label>
					
							<label className="label-form">Documento de Identificación: </label>
							<input className="input-registro" type="text" placeholder="23456789" name='ccCliente'/>
							<label className="label-form">Nombre del Cliente: </label>
							<input className="input-registro" type="text" placeholder="Julio Guevara" name = 'nombreCliente'/>
				
						</section>

						<section className="seccionInfoVendedor">
					
						<label className="">
							Información del Vendedor
							</label>
				
				
							<label className="label-form">Documento de Identificación: </label>
							<input className="input-registro" type="text" placeholder="123432121" name='ccVendedor'/>
							<label className="label-form">Nombre del Vendedor: </label>
							<input className="input-registro" type="text" placeholder="Tatiana Gomez" name = 'nombreVendedor'/>
							
							</section>
							<div className="btn-cambios">
						<button className="botonCambios" type="submit">
						Registrar Venta</button>
						<ToastContainer />
					</div>
					</form>
				
				
					
				
				</div>
			
  )
}
export default  RegistroVentas;