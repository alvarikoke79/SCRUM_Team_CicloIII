import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { crearVenta } from 'util/api';
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios } from 'util/api';
import { obtenerProductos } from 'util/api';
import { nanoid } from 'nanoid';
import PrivateComponent from 'components/PrivateComponent';

/*
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
        CantidadVenta: nuevaVenta.CantidadVenta,
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
						<button className="botonCambios" type='submit'>
						Registrar Venta</button>
						<ToastContainer />
					</div>
					</form>
				
				
					
				
				</div>
			
  )
}
*/
const RegistroVentas =()=>{
  const form = useRef(null);
  const[vendedores,setVendedores] = useState([]);
  const[productos,setProductos] = useState([]);
  const [productosTabla,setProductosTabla]=useState([]);
  const[valorTotal,setValorTotal] = useState(0)
  

  


  useEffect(()=>{
    const fetchVendedores = async()=>{
      await obtenerUsuarios(
        (response)=>{
          setVendedores(response.data);
        },
        (error)=>{
          console.error(error);
        }
      )
    };
    const fetchProductos = async()=>{
      await obtenerProductos(
        (response)=>{setProductos(response.data)},
        (error)=>{console.error(error)}
      );
    };
    fetchVendedores();
    fetchProductos();

  }
  ,[]);


   const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });
    console.log(formData);

    const listaProductos= Object.keys(formData).map((k)=>{
      if(k.includes('producto')){
        return productosTabla.filter((v)=>v._id===formData[k])[0];
      }
      return null;
    }).filter(v=>v);
/*
    Object.keys(formData)
    .forEach((k)=>{
      if(k.includes('cantidad')){
        const indice = parseInt(k.split('_')[1]);
        listaProductos[indice]['cantidad'] = formData[k];


      }
    });*/

    const datosVenta={
      vendedor: vendedores.filter((v)=>v._id === formData.vendedor)[0],
      cantidad: valorTotal,
      productos:listaProductos,
      idVenta: formData.idVenta,
      fechaVenta: formData.fechaVenta,
      ccCliente: formData.ccCliente,
      nombreCliente: formData.nombreCliente,
      estadoVenta: formData.estadoVenta,
    }
    console.log('lista productos', listaProductos)
    await crearVenta(datosVenta,
      (response)=>{
        console.log(response)
        toast.success("Venta agregada con éxito");
      },
      (error)=>{
        console.error(error)
        toast.error("Error creando la venta");
      }
      )


   }; 
  return(
  <div className="box1">
    <div className='flex h-full w-full over-flow-y-scroll items-center justify-center'>
    <PrivateComponent roleList={["Administrador","Vendedor","autorizado"]}>
    <form ref={form} onSubmit={submitForm} className = 'flex flex-col'>
      <h1 className='text-3xl font-extrabold text-gray-900 my-3'>Crear una nueva venta </h1>
    
      <div className='flex p-2'>
        <label className='flex flex-col justify-center'>
          <p className='text-xl font font-gray-900 p-1'>ID Venta:</p>
        </label>
       <input
     className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
       type="text" placeholder="103049" name='idVenta' required/>
    
     <label className='flex flex-col justify-center'>
       <p className='text-xl font font-gray-900 p-1'>
         Fecha de Venta:
         </p>
          </label>
							<input className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
               type="date" name='fechaVenta' required/>
     </div>

     <div className='flex p-2'>
     <label className='flex flex-col justify-center'>
       <p className='text-xl font font-gray-900 p-1'>
         Documento cliente: 
       </p></label>
				<input 
        className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
         type="text" 
         placeholder="23456789" 
         name='ccCliente' required/>
							<label className='flex flex-col justify-center'>
                <p className='text-xl font font-gray-900 p-1'>
                  Nombre del Cliente:
                  </p> </label>
							<input className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
               type="text"
                placeholder="Julio Guevara"
                 name = 'nombreCliente' required/>


     </div>

     <div className='flex p-2'>
            <label className='flex flex-col' htmlFor="estadoVenta">
              <p className='text-xl font font-gray-900 p-1'>Estado:</p>
            </label>
            <select className='p-2' 
              name='estadoVenta'>
                <option>En proceso</option>
                <option>Cancelada</option>
                <option>Entregada</option>
              </select>
      </div>
							
      <label className='flex flex-col p-2' htmlFor='vendedor'>
        <span className='text-2xl font font-gray-900'>Vendedor</span>
      <select name='vendedor' className='p-2' defaultValue='' required>
        <option disabled value=''>Seleccione un vendedor</option>
        {vendedores.map((el) => {
          return <option key={nanoid()} value={el._id}>{`${el.name}`}</option>;
        })}
      </select>
      </label>

        
        <TablaProductos productos={productos} setProductos={setProductos}
         setProductosTabla={setProductosTabla} setValorTotal={setValorTotal} />
         


      <label className='flex flex-col'>
        <span className='text-2xl font font-gray-900 p-2'>valor total venta =  {valorTotal}</span>
        {/*<input 
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
         type ='number' 
        name='valor'/>*/}
      </label>
      <div className='p-2'>
      <button className="btnRegister" type='submit'>Crear venta</button>
      <ToastContainer position='bottom-center' autoClose={5000} />
       </div>
       
    </form>
    </PrivateComponent>
    
  </div>
  </div>
  

  );
};

const TablaProductos = ({productos, setProductos,setProductosTabla,setValorTotal})=>{
  const [productoAAgregar, setProductoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([])
  const [valorT, setValorT]=useState(0)

  /*useEffect(()=>{
    console.log(productoAAgregar)
  },[productoAAgregar]);*/

  useEffect(()=>{
    //console.log('filas tabla', filasTabla)
    setProductosTabla(filasTabla)
  },[filasTabla,setProductosTabla])

  useEffect(()=>{
    setValorTotal(valorT);
  },[valorT,setValorTotal])


  const sumarValorTotal=(valorSumar)=>{
    setValorT(parseFloat(valorT) + parseFloat( valorSumar));
  }
  const restarValorTotal=(valorRestar)=>{
    setValorT(parseFloat(valorT) - parseFloat(valorRestar));
  }

  const agregarNuevoProducto=()=>{
    setFilasTabla([...filasTabla,productoAAgregar]);
    setProductos(productos.filter((v)=>v._id!==productoAAgregar._id));
    setProductoAAgregar({});
  }

  const eliminarProducto = (productoAEliminar,valorRestar)=>{
    setFilasTabla(filasTabla.filter(v=>v._id!==productoAEliminar._id));
    setProductos([...productos, productoAEliminar]);
    restarValorTotal(valorRestar)

  }

  const modificarProducto = (producto, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto.id) {
          ft.cantidad = cantidad;
          ft.total = producto.valor * cantidad;
        }
        return ft;
      })
    );
  };

  
  return(
    <div>
    <div className = 'flex p-2 '>
    <label className='flex flex-col' htmlFor='producto'>
  <select  className='p-2' 
  value={productoAAgregar._id ?? ''} 
  onChange={(e)=> setProductoAAgregar(productos.filter((v)=>v._id===e.target.value)[0])}>

    <option disabled value=''>Seleccione un producto</option>
    {productos.map((el) => {
      return (<option key={nanoid()} value={el._id}>{`${el.idProduct} ${el.nombre}`}</option>)
    })}
  </select>
  </label>   
    <button  onClick={()=> agregarNuevoProducto()} type = "button" className="btnRegister">agregar producto</button>
    
  </div>
  <table className='tabla'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre </th>
          <th>Valor </th>
          <th>Descripcion </th>
          <th>Estado </th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Eliminar</th>
          <th className='hidden'>Input</th>
        </tr>

      </thead>
      <tbody>
        {filasTabla.map((el,index)=>{
          return(
            <FilaProducto
            key={el._id}
            prod ={el}
            index={index}
            eliminarProducto={eliminarProducto}
            modificarProducto={modificarProducto}
            sumarValorTotal={sumarValorTotal}
            restarValorTotal={restarValorTotal} />
            
            /*<tr key={nanoid()}>
              <td>{el.idProduct}</td>
            <td>{el.nombre}</td>
            <td>{el.valor}</td>
            <td>{el.descripcion}</td>
            <td>{el.estado}</td>
            <td>
              <label htmlFor = {`valor_${index}`}>
              <input type='number' name={`cantidad_${index}`} required/>
              </label>
              </td>
            <td><i onClick={()=>eliminarProducto(el)} className='fas fa-minus text-red-500 cursor-pointer' /></td>
            <input hidden defaultValue={el._id} name={`producto_${index}`}/>
          </tr>*/
          );
        })}
      </tbody>


    </table>
  </div>

  );
};

const FilaProducto=({prod,index,eliminarProducto,modificarProducto,sumarValorTotal,restarValorTotal})=>{
  const[producto,setProducto]=useState(prod);
  
  useEffect(()=>{
    console.log('prod', producto);
  },[producto]);
 
  return(
    <tr key={nanoid()}>
              <td>{producto.idProduct}</td>
            <td>{producto.nombre}</td>
            <td>{producto.valor}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.estado}</td>
            <td>
              <label htmlFor = {`valor_${index}`}>
              <input 
              type='number' 
              name={`cantidad_${index}`} 
              value={producto.cantidad}
              onChange={(e)=>{
                modificarProducto(producto,e.target.value==='' ? '0': e.target.value);
                setProducto({
                  ...producto,
                  cantidad: e.target.value==='' ? '0':e.target.value, 
                  total:
                  parseFloat(producto.valor) * 
                  parseFloat(e.target.value ==='' ? '0' : e.target.value),
                });
                sumarValorTotal(parseFloat(producto.valor) * 
                parseFloat(e.target.value ==='' ? '0' : e.target.value))
              }}
              />
              </label>
              </td>
              <td>{parseFloat(producto.total ?? 0)}</td>
            <td><i onClick={()=>eliminarProducto(producto, producto.total)} className='fas fa-minus text-red-500 cursor-pointer' /></td>
            <input hidden defaultValue={producto._id} name={`producto_${index}`}/>
          </tr>

  )
}
export default  RegistroVentas;


