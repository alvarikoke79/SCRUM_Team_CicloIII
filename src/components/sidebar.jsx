import React from 'react';
import ImgLogo from './ImgLogo'
import { Link } from 'react-router-dom';

const sidebar = () => {
    return (
        <nav className='sidebarmain'>
          
        <Link to='/admin/RegistroProductos'>
        <ImgLogo/>
        </Link>

        <div>
        <div className='sidebarbotondiv'>
        <Link to='/admin/RegistroProductos'>
            <button className = 'sidebarBotons'>Registro de productos</button>  
        </Link>  
        </div>
        <div className='sidebarbotondiv'>
        <Link to='/admin/MaestroProductos'>
            <button className = 'sidebarBotons'>Maestro de productos</button>  
        </Link>  
        </div>
        <div className='sidebarbotondiv'>
        <Link to='/admin/RegistroVentas'>
            <button className = 'sidebarBotons'>Registro de ventas</button>  
        </Link>  
        </div>
        <div className='sidebarbotondiv'>
        <Link to='/admin/MaestroVentas'>
            <button className = 'sidebarBotons'>Maestro de ventas</button>  
        </Link>  
        </div>
        <div className='sidebarbotondiv'>
        <Link to='/admin/GestionUsuarios'>
            <button className = 'sidebarBotons'>Gestion de Usuarios</button>  
        </Link>  
        </div>
       
        <div>
        <button className='botonCerrarSesion'>Cerrar sesión</button>
        </div>
        </div>
        </nav>

       

    )
}

export default sidebar
