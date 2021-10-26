

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { obtenerVentas } from 'util/api';
import { editarVenta } from 'util/api';
import { eliminarVenta } from 'util/api';
import PrivateComponent from 'components/PrivateComponent';

const MaestroVentas = () => {

    const [ventas,setVentas] = useState([])
	const [ejecutarConsulta,setEjecutarConsulta] = useState(true)

    //UseEfect para el get de los ventas 
	useEffect(()=>{
        if (ejecutarConsulta){
            obtenerVentas(
                (response)=> {
                    setVentas(response.data);
                },
                (error)=> {
                    console.error(error);
                }
            );
            setEjecutarConsulta(false);
        }
    },[ejecutarConsulta]);
    return (
        /*<div className="flex h-full w-full flex-col items-center justify-start p-8">*/
			<div className="box1">
		
			<div className='flex flex-col items-center justify-center w-full p-8'>
			
				<p className="title">Maestro de Ventas:</p>
			</div>

			<div className='flex flex-col items-center justify-center w-full p-8'>
			
				<TablaVentas
            listaVentas={ventas} 
            setEjecutarConsulta={setEjecutarConsulta}/>
			<ToastContainer
                position="bottom-center"
                autoClose={5000}
            />
					</div>	
		</div>
        
    )
}

const TablaVentas=({listaVentas,setEjecutarConsulta})=>{
	const [busqueda,setBusqueda]=useState(''); //busqueda es el ccCliente que se está tomando del cuadro de busqueda
    const [ventasFiltrados,setVentasFiltrados] = useState(listaVentas) //estadoVentas que en un inicio tiene tdo los ventas del backend
    useEffect(()=>{
        //filter crea un objeto de la lista de prodcutos y a ese objeto hay que buscar las plabras incluidas en el fechaVenta  o ccCliente, etc. 
        //setVentas filtrados cambia el ccCliente de porductosFiltrados, ahora la tabla solo muestra los ccClientees filtrados
        //ya que en la tabla se hace map a ventasFiltrados 
        setVentasFiltrados(listaVentas.filter((elemento)=>{
            console.log('elemento', elemento)
            //return elemento.fechaVenta.includes(busqueda); // forma de buscar por una columna especifica
            //return elemento.fechaVenta.toLowerCase().includes(busqueda.toLowerCase()) //forma de buscar sin porblema de mayusculas
            //como elemento(por el JSON) y busqueda son strings se cambian ambas a minusculas para evitar errores de camelsensitive
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase()); //JSON.stringify convierte a estring todo el elemento y busca entre todo las coincidencias, esto forma busca en todas las columnas 
        }));
    },[busqueda,listaVentas])

	return(
		<div className='flex flex-col items-center justify-center w-full py-8'>
            <input
            value={busqueda}
            onChange={(e)=> setBusqueda(e.target.value)} 
            placeholder='Buscar' 
            className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'/>
            <h2 className='text-2xl font-extrabold text-green-800'>Todos los ventas</h2>
          
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Id venta</th>
                        <th>fecha Venta</th>
                        <th>C.C. cliente</th>
                        <th>Vendedor</th>
                        <th>Total venta</th>
                        <th>Estado Venta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                     {ventasFiltrados.map((venta) => {
                        return (
                            <FilaVenta 
                            key={nanoid()} 
                            venta={venta} 
                            setEjecutarConsulta={setEjecutarConsulta}
                            />
                            )
                    })}
                </tbody>
            </table>
        </div>

    );
};

const FilaVenta = ({venta,setEjecutarConsulta}) => {
    const [edit,setEdit]= useState(false)
    const [openDialog,setOpenDialog]= useState(false)
    const [infoNuevoVenta,setInfoNuevoVenta] = useState({
        _id: venta._id,
		idVenta: venta.idVenta,
        fechaVenta: venta.fechaVenta,
        ccCliente: venta.ccCliente,
        estadoVenta: venta.estadoVenta,
        cantidad: venta.cantidad,
        vendedor: `${venta.vendedor.nombres} ${venta.vendedor.apellidos}`
    });

   const actualizarVenta= async()=>{
    await editarVenta(
        venta._id,
        {fechaVenta: infoNuevoVenta.fechaVenta,   
            ccCliente: infoNuevoVenta.ccCliente,  
            estadoVenta:infoNuevoVenta.estadoVenta,
            cantidad: infoNuevoVenta.cantidad},
            (response)=> {
                console.log(response.data);
                toast.success("Venta editado con éxito");
                setEdit(false);
                setEjecutarConsulta(true)},
                (error) => {
                    console.error(error)}
          
)};
    /*const actualizarVenta= async ()=>{
        console.log("esta es toda la info del formulario",infoNuevoVenta);

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/ventas/${venta._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {fechaVenta: infoNuevoVenta.fechaVenta,   ccCliente: infoNuevoVenta.ccCliente, vendedor: infoNuevoVenta.vendedor, estadoVenta:infoNuevoVenta.estadoVenta}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Venta editado con éxito");
            setEdit(false);
            setEjecutarConsulta(true);
          }).catch(function (error) {
            console.error(error);
          });
       
        };*/
    const deleteSale= async ()=>{
        await eliminarVenta(venta._id,
            (response) => {
                console.log(response.data);
                toast.success("Venta eliminado");
                setEjecutarConsulta(true)},
                (error) => {
                    console.error(error);
                    toast.error("no se pudo eliminar")
                  }

            
            )
            setOpenDialog(false);;
        
          
                }
    return (
        <PrivateComponent roleList={["Administrador","Vendedor","autorizado"]}>
        <tr>
            {edit? (
            <>
                <td>{infoNuevoVenta.idVenta}</td>
                <td>
                    <input 
                        className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
                        type='text'
                        value={infoNuevoVenta.fechaVenta}
                    onChange={(e)=>setInfoNuevoVenta({ ...infoNuevoVenta,fechaVenta: e.target.value})}/>
                    </td>
                <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
                type='number' value={infoNuevoVenta.ccCliente}
                onChange={(e)=>setInfoNuevoVenta({ ...infoNuevoVenta,ccCliente: e.target.value})}/></td>
                <td>{infoNuevoVenta.vendedor}</td>
                 <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
                 type='text' value={infoNuevoVenta.cantidad}
                 onChange={(e)=>setInfoNuevoVenta({ ...infoNuevoVenta,cantidad: e.target.value})}/></td>
                <td>
				<select
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 '
                    defaultValue={infoNuevoVenta.estadoVenta}
					onChange={(e)=>setInfoNuevoVenta({ ...infoNuevoVenta,estadoVenta: e.target.value})}>
                        
                        <option>En proceso</option>
                        <option>Cancelada</option>
                         <option>Entregada</option>
                        </select>
				 </td>
               
            </>
            ):(
            <>
            <td>{venta.idVenta}</td>
            <td>{venta.fechaVenta}</td>
            <td>{venta.ccCliente}</td>
            <td>{`${venta.vendedor.name}`}</td>
            <td>{venta.cantidad}</td>
            <td>{venta.estadoVenta}</td>
            </>
            )}
            
            
            <td>
                <div className='flex w-full justify-around'>
                    {edit ? (
                        <>
                    <Tooltip title='Confirmar edición' arrow>
                        <i
                     onClick={()=> actualizarVenta()} 
                     className='fas fa-check text-green-700 hover:text-blue-500'/>
                     </Tooltip>

                     <Tooltip title='Cancelar edición' arrow>
                        <i onClick={()=> setEdit(!edit)} 
                        className='fas fa-ban text-yellow-700 hover:text-yellow-500' /></Tooltip>
                        </>
                   
                    
                    ):(
                        <>
                        <Tooltip title='Editar venta' arrow>
                        <i onClick={()=> setEdit(!edit)} 
                        className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500' /></Tooltip>
                        <Tooltip title='Eliminar venta' arrow >
                        <i onClick={()=>setOpenDialog(true)} className='fas fa-trash text-red-700 hover:text-red-500' />
                        </Tooltip>
                        </>
                        )}
                </div>
                <Dialog open={openDialog}>
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-900 text-2xl font-bold'>Está seguro de querer eliminar el venta?</h1>
                        <div className='flex w-full items-center justify-center my-4'>
                        <button onClick={()=>deleteSale()} className='mx-2 my-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 runded-md shadow-md'>Si</button>
                        <button onClick={()=>setOpenDialog(false)} className='mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 runded-md shadow-md'>No</button>
                        </div>
                    </div>
                </Dialog>
            </td>

        </tr>
        </PrivateComponent>
    )

    /*return(
        
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

                    <table className="tabla">
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
                        Guardar los cambios de estadoVenta de las ventas
                        <button className="botonCambios">Guardar cambios</button>
                    </label>
                </section>

                
            </div>	
    )*/
}
export default MaestroVentas;