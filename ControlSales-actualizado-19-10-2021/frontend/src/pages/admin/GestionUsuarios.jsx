import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { obtenerUsuarios } from 'util/api';
import { editarUsuario } from 'util/api';
import { eliminarUsuario } from 'util/api';
import PrivateComponent from 'components/PrivateComponent';

const GestionUsuarios = () => {
	const [usuarios,setUsuarios] = useState([])
	const [ejecutarConsulta,setEjecutarConsulta] = useState(true)
	
//UseEffect para traer los datos de la BD con un get 
	useEffect(()=>{
        if (ejecutarConsulta){
            obtenerUsuarios(
                (response)=>{
                    console.log();
                    setUsuarios(response.data);
                },
                (error) =>{
                    console.error(error);
                }
            );
            setEjecutarConsulta(false)
        }
    },[ejecutarConsulta]);
return(


<div className="box1">
			<p className="tituloGu">Gestion de usuarios</p>

			<div className='flex flex-col items-center justify-center w-full p-8'>
			
				<TablaUsuarios
            listaUsuarios={usuarios} 
            setEjecutarConsulta={setEjecutarConsulta}/>
			<ToastContainer
                position="bottom-center"
                autoClose={5000}
            />
					</div>	
		
		{/*<div>
			
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
			</div>*/}
		</div>
)


}

const TablaUsuarios=({listaUsuarios,setEjecutarConsulta})=>{
	const [busqueda,setBusqueda]=useState(''); //busqueda es el nombres que se está tomando del cuadro de busqueda
    const [usuariosFiltrados,setUsuariosFiltrados] = useState(listaUsuarios) //estados que en un inicio tiene tdo los usuarios del backend
    useEffect(()=>{
        //filter crea un objeto de la lista de prodcutos y a ese objeto hay que buscar las plabras incluidas en el cedula o nombres, etc. 
        //setUsuarios filtrados cambia el nombres de porductosFiltrados, ahora la tabla solo muestra los nombreses filtrados
        //ya que en la tabla se hace map a usuariosFiltrados 
        setUsuariosFiltrados(listaUsuarios.filter((elemento)=>{
            console.log('elemento', elemento)
            //return elemento.cedula.includes(busqueda); // forma de buscar por una columna especifica
            //return elemento.cedula.toLowerCase().includes(busqueda.toLowerCase()) //forma de buscar sin porblema de mayusculas
            //como elemento(por el JSON) y busqueda son strings se cambian ambas a minusculas para evitar errores de camelsensitive
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase()); //JSON.stringify convierte a estring todo el elemento y busca entre todo las coincidencias, esto forma busca en todas las columnas 
        }));
    },[busqueda,listaUsuarios])

	return(
		<div className='flex flex-col items-center justify-center w-full py-8'>
            <input
            value={busqueda}
            onChange={(e)=> setBusqueda(e.target.value)} 
            placeholder='Buscar' 
            className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'/>
            <h2 className='text-2xl font-extrabold text-green-800'>Todos los usuarios</h2>
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol del ususario</th>
                        <th>Estado del usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                     {usuariosFiltrados.map((usuario) => {
                        return (
                            <FilaUsuario 
                            key={nanoid()} 
                            usuario={usuario} 
                            setEjecutarConsulta={setEjecutarConsulta}
                            />
                            )
                    })}
                </tbody>
            </table>
        </div>

    );
};

const FilaUsuario = ({usuario,setEjecutarConsulta}) => {
    const [edit,setEdit]= useState(false)
    const [openDialog,setOpenDialog]= useState(false)
    const [infoNuevoUsuario,setInfoNuevoUsuario] = useState({
        _id: usuario._id,
        nombre: usuario.name,
		correo:usuario.email,
        rol: usuario.rol,
        estado: usuario.estado,
		
    });
    const actualizarUsuario= async ()=>{
        await editarUsuario(usuario._id,
            { nombre: infoNuevoUsuario.name, 
                correo: infoNuevoUsuario.correo, rol: infoNuevoUsuario.rol,
                 estado:infoNuevoUsuario.estado},

            (response)=> {
                console.log(response.data);
                toast.success("Usuario editado con éxito");
                setEdit(false);
                setEjecutarConsulta(true);
              }, 
              (error)=> {
                console.error(error);
              }
            );

            };
    const deleteUser= async ()=>{
        await eliminarUsuario(usuario._id,
            (response) =>{
                console.log(response.data);
                toast.success("Usuario eliminado");
                setEjecutarConsulta(true);
              },
              (error)=> {
                console.error(error);
                toast.error("no se pudo eliminar")
              } 
            );
            setOpenDialog(false);
        
            }
        
    return (
        <PrivateComponent roleList={["Administrador","autorizado"]}>
        <tr>
            {edit? (
            <>
                <td>{infoNuevoUsuario.nombre}</td>
                
                 
                <td>{infoNuevoUsuario.correo}</td>
               
				<td> 
				
				<select 
                        className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-1'
                        
                        defaultValue={infoNuevoUsuario.rol}
                    onChange={(e)=>setInfoNuevoUsuario({ ...infoNuevoUsuario,rol: e.target.value})}>
						<option>Administrador</option>
						<option>Vendedor</option>
                        <option>sin rol </option>
					</select>
                    </td>
				<td>
				<select
                    className='bg-gray-50 border border-gray-600 p-1 rounded-lg m-1 '
                    defaultValue={infoNuevoUsuario.estado}
					onChange={(e)=>setInfoNuevoUsuario({ ...infoNuevoUsuario,estado: e.target.value})}>
                        
                            <option>pendiente</option>
                            <option>autorizado</option>
							<option>no autorizado</option>
                        </select>
				 </td>
               
            </>
            ):(
            <>
         
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
			<td>{usuario.rol}</td>
            <td>{usuario.estado}</td>
            </>
            )}
            
            
            <td>
                <div className='flex w-full justify-around'>
                    {edit ? (
                        <>
                    <Tooltip title='Confirmar edición' arrow>
                        <i
                     onClick={()=> actualizarUsuario()} 
                     className='fas fa-check text-green-700 hover:text-blue-500'/>
                     </Tooltip>

                     <Tooltip title='Cancelar edición' arrow>
                        <i onClick={()=> setEdit(!edit)} 
                        className='fas fa-ban text-yellow-700 hover:text-yellow-500' /></Tooltip>
                        </>
                   
                    
                    ):(
                        <>
                        <Tooltip title='Editar usuario' arrow>
                        <i onClick={()=> setEdit(!edit)} 
                        className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500' /></Tooltip>
                        <Tooltip title='Eliminar usuario' arrow >
                        <i onClick={()=>setOpenDialog(true)} className='fas fa-trash text-red-700 hover:text-red-500' />
                        </Tooltip>
                        </>
                        )}
                </div>
                <Dialog open={openDialog}>
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-900 text-2xl font-bold'>Está seguro de querer eliminar el usuario?</h1>
                        <div className='flex w-full items-center justify-center my-4'>
                        <button onClick={()=>deleteUser()} className='mx-2 my-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 runded-md shadow-md'>Si</button>
                        <button onClick={()=>setOpenDialog(false)} className='mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 runded-md shadow-md'>No</button>
                        </div>
                    </div>
                </Dialog>
            </td>

        </tr>
        </PrivateComponent>
    )
}
export default GestionUsuarios;