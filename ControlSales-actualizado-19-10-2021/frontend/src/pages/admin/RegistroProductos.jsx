import PrivateComponent from "components/PrivateComponent";
import React, { /*useEffect, useState,*/ useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registrarProductos } from "util/api";

const RegistroProductos = () => {
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    await registrarProductos(
      {
        idProduct: nuevoProducto.idProduct,
        nombre: nuevoProducto.nameProduct,
        descripcion: nuevoProducto.DescriptionProduct,
        estado: nuevoProducto.stateProduct,
        valor: nuevoProducto.unitValueProduct,
      },
      (response) => {
        console.log(response.data);
        toast.success("Producto agregado con éxito");
      },
      (error) => {
        console.error(error);
        toast.error("Error creando un producto");
      }
    );
  };

  /*
	const enviaralBackend = () =>{
	console.log("prueba enviar")
	toast("Registro exitoso!!");
	}
	*/

  return (

    <div className="box1">
      <p className="interfaz_RegProducto">Registro de productos:</p>
      <div className="columna1">
    <PrivateComponent roleList={["Administrador","autorizado"]}>

        <form ref={form} onSubmit={submitForm}>
          <div className="IdProducto">
            <label htmlFor="idProduct">
              Crear ID del Producto
              <input
                className='idinput'
                type="text"
                name='idProduct'
                placeholder='000001'
                required
              />
              {/* <input type="submit" value="Crear"/>  */}
            </label>
          </div>
          <div className="IdProducto">
            <label htmlFor="nameProduct">
              Crear nombre del Producto
              <input
                className='idinput'
                type="text"
                name='nameProduct'
                placeholder='zapatos'
                required
              />
              {/* <input type="submit" value="Crear"/>  */}
            </label>
          </div>
          <div className="descripcion">
            <label htmlFor="DescriptionProduct" className="txtdescription">
              Descripción del Producto
              <input type="text" 
              name='DescriptionProduct' 
              required />
            </label>
          </div>
          <div className="Idproducto1">
            <label htmlFor="StateProduct">
              Estado:
              <select className="selectstatePrduct" 
              name='stateProduct'>
                <option>Disponible</option>
                <option>No Disponible</option>
              </select>
            </label>
            <label htmlFor="unitValueProduct">
              Valor Unitario:
              <input
                className="inputvalue"
                type="text"
                name='unitValueProduct'
              />
            </label>
          </div>
          <div>
            <button className="btnRegister" type="submit">
              Registrar
            </button>
            <ToastContainer position='top-right' autoClose={5000}/>
          </div>
        </form>
        </PrivateComponent>
      </div>
    </div>
   
  );
};

export default RegistroProductos;
