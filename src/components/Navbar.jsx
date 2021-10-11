import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className ='mainaNavbar'>
        <ul className='listnavbar'>
            <li>Logo</li>
            <li>navegacion</li>
            <li>navegacion2</li>
            <li className = 'liinisesion'>
                <Link to = '/login'>
                <button className= 'Buttonlogin'>Iniciar sesión</button>
                </Link>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar
