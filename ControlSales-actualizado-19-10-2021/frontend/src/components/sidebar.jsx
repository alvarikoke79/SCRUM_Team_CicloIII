import React from 'react';
import ImgLogo from './ImgLogo'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import useActiveRoute from 'hooks/useActiveRoute';


const Sidebar = () => {
    const { logout } = useAuth0();
    return (
      <nav className='hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar'>
        <Link to='/admin'>
          <ImgLogo />
        </Link>
  
        <div className='my-3'>
        <Ruta ruta='/admin/RegistroProductos' nombre='Registro de Productos' />
          <Ruta ruta='/admin/MaestroProductos' nombre='Maestro de productos' />
          <Ruta ruta='/admin/RegistroVentas' nombre='Registro de Ventas' />
          <Ruta ruta='/admin/MaestroVentas' nombre='Maestro de Ventas' />
          <Ruta ruta='/admin/GestionUsuarios' nombre='Gestion de Usuarios' />
        </div>
        <button className = 'sidebarBotons' onClick={() => logout({ returnTo: 'http://localhost:3000/' })}>Cerrar Sesión</button>
      </nav>
    );
  };
  
  const Ruta = ({ icono, ruta, nombre }) => {
    const isActive = useActiveRoute(ruta);
    return (
      <Link to={ruta}>
        <button
          className={`p-1 my-2  bg-${
            isActive ? 'indigo' : 'gray'
          }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
        >
          <i className={`${icono} w-6`} />
          {nombre}
        </button>
      </Link>
    );
  };
  
  export default Sidebar;
  