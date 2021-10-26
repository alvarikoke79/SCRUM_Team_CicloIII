import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { obtenerProductos } from 'util/api';
import { editarProducto } from 'util/api';
import { eliminarProducto } from 'util/api';
import PrivateComponent from 'components/PrivateComponent';


const MaestroProductos = () => {
	const [productos,setProductos] = useState([])
	const [ejecutarConsulta,setEjecutarConsulta] = useState(true)

    //UseEfect para el get de los productos 
	useEffect(()=>{
        if (ejecutarConsulta){
            obtenerProductos(
                (response)=> {
                    setProductos(response.data);
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
			
				<p className="title">Maestro de Productos:</p>
			</div>

			<div className='flex flex-col items-center justify-center w-full p-8'>
			
				<TablaProductos
            listaProductos={productos} 
            setEjecutarConsulta={setEjecutarConsulta}/>
			<ToastContainer
                position="bottom-center"
                autoClose={5000}
            />
					</div>	
		</div>
        
    )
}

const TablaProductos=({listaProductos,setEjecutarConsulta})=>{
	const [busqueda,setBusqueda]=useState(''); //busqueda es el valor que se está tomando del cuadro de busqueda
    const [productosFiltrados,setProductosFiltrados] = useState(listaProductos) //estados que en un inicio tiene tdo los productos del backend
    useEffect(()=>{
        //filter crea un objeto de la lista de prodcutos y a ese objeto hay que buscar las plabras incluidas en el nombre  o valor, etc. 
        //setProductos filtrados cambia el valor de porductosFiltrados, ahora la tabla solo muestra los valores filtrados
        //ya que en la tabla se hace map a productosFiltrados 
        setProductosFiltrados(listaProductos.filter((elemento)=>{
            console.log('elemento', elemento)
            //return elemento.nombre.includes(busqueda); // forma de buscar por una columna especifica
            //return elemento.nombre.toLowerCase().includes(busqueda.toLowerCase()) //forma de buscar sin porblema de mayusculas
            //como elemento(por el JSON) y busqueda son strings se cambian ambas a minusculas para evitar errores de camelsensitive
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase()); //JSON.stringify convierte a estring todo el elemento y busca entre todo las coincidencias, esto forma busca en todas las columnas 
        }));
    },[busqueda,listaProductos])

	return(
		<div className='flex flex-col items-center justify-center w-full py-8'>
            <input
            value={busqueda}
            onChange={(e)=> setBusqueda(e.target.value)} 
            placeholder='Buscar' 
            className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'/>
            <h2 className='text-2xl font-extrabold text-green-800'>Todos los productos</h2>
          
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre del Producto</th>
                        <th>Valor del Producto</th>
                        <th>Descripcion del Producto</th>
                        <th>Estado del Producto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                     {productosFiltrados.map((producto) => {
                        return (
                            <FilaProducto 
                            key={nanoid()} 
                            producto={producto} 
                            setEjecutarConsulta={setEjecutarConsulta}
                            />
                            )
                    })}
                </tbody>
            </table>
        </div>

    );
};

const FilaProducto = ({producto,setEjecutarConsulta}) => {
    const [edit,setEdit]= useState(false)
    const [openDialog,setOpenDialog]= useState(false)
    const [infoNuevoProducto,setInfoNuevoProducto] = useState({
        _id: producto._id,
		idProduct: producto.idProduct,
        nombre: producto.nombre,
        valor: producto.valor,
        descripcion: producto.descripcion,
        estado: producto.estado,
    });

   const actualizarProducto= async()=>{
    await editarProducto(
        producto._id,
        {nombre: infoNuevoProducto.nombre,   
            valor: infoNuevoProducto.valor, 
            descripcion: infoNuevoProducto.descripcion, 
            estado:infoNuevoProducto.estado},
            (response)=> {
                console.log(response.data);
                toast.success("Producto editado con éxito");
                setEdit(false);
                setEjecutarConsulta(true)},
                (error) => {
                    console.error(error)}
          
)};
    /*const actualizarProducto= async ()=>{
        console.log("esta es toda la info del formulario",infoNuevoProducto);

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/productos/${producto._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {nombre: infoNuevoProducto.nombre,   valor: infoNuevoProducto.valor, descripcion: infoNuevoProducto.descripcion, estado:infoNuevoProducto.estado}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Producto editado con éxito");
            setEdit(false);
            setEjecutarConsulta(true);
          }).catch(function (error) {
            console.error(error);
          });
       
        };*/
    const deleteProduct= async ()=>{
        await eliminarProducto(producto._id,
            (response) => {
                console.log(response.data);
                toast.success("Producto eliminado");
                setEjecutarConsulta(true)},
                (error) => {
                    console.error(error);
                    toast.error("no se pudo eliminar")
                  }
            )
            setOpenDialog(false);;
        
          
                }
    return (
        <PrivateComponent roleList={["Administrador","autorizado"]}>
        <tr>
            {edit? (
            <>
                <td>{infoNuevoProducto.idProduct}</td>
                <td>
                    <input 
                        className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
                        type='text'
                        value={infoNuevoProducto.nombre}
                    onChange={(e)=>setInfoNuevoProducto({ ...infoNuevoProducto,nombre: e.target.value})}/>
                    </td>
                <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
                type='number' value={infoNuevoProducto.valor}
                onChange={(e)=>setInfoNuevoProducto({ ...infoNuevoProducto,valor: e.target.value})}/></td>
                <td><input className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-2'
                 type='text' value={infoNuevoProducto.descripcion}
                 onChange={(e)=>setInfoNuevoProducto({ ...infoNuevoProducto,descripcion: e.target.value})}/></td>
                <td>
				<select
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 '
                    defaultValue={infoNuevoProducto.estado}
					onChange={(e)=>setInfoNuevoProducto({ ...infoNuevoProducto,estado: e.target.value})}>
                        
                            <option>Disponible</option>
                            <option>No disponible</option>
                        </select>
				 </td>
               
            </>
            ):(
            <>
            <td>{producto.idProduct}</td>
            <td>{producto.nombre}</td>
            <td>{producto.valor}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.estado}</td>
            </>
            )}
            
            
            <td>
                
                <div className='flex w-full justify-around'>
                    {edit ? (
                        <>
                    <Tooltip title='Confirmar edición' arrow>
                        <i
                     onClick={()=> actualizarProducto()} 
                     className='fas fa-check text-green-700 hover:text-blue-500'/>
                     </Tooltip>

                     <Tooltip title='Cancelar edición' arrow>
                        <i onClick={()=> setEdit(!edit)} 
                        className='fas fa-ban text-yellow-700 hover:text-yellow-500' /></Tooltip>
                        </>
                   
                    
                    ):(
                        <>
                        <Tooltip title='Editar producto' arrow>
                        <i onClick={()=> setEdit(!edit)} 
                        className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500' /></Tooltip>
                        <Tooltip title='Eliminar producto' arrow >
                        <i onClick={()=>setOpenDialog(true)} className='fas fa-trash text-red-700 hover:text-red-500' />
                        </Tooltip>
                        </>
                        )}
                </div>
              
                <Dialog open={openDialog}>
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-900 text-2xl font-bold'>Está seguro de querer eliminar el producto?</h1>
                        <div className='flex w-full items-center justify-center my-4'>
                        <button onClick={()=>deleteProduct()} className='mx-2 my-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 runded-md shadow-md'>Si</button>
                        <button onClick={()=>setOpenDialog(false)} className='mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 runded-md shadow-md'>No</button>
                        </div>
                    </div>
                </Dialog>
            </td>
          
        </tr>
        </PrivateComponent>
    )
}
	


export default MaestroProductos;
