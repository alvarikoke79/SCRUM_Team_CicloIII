
import React, {useEffect, useState} from 'react';

const vehiculos = () => {
    
    return (

        
		<div className="box1">
            <p className="interfaz_RegProducto">Registro de productos</p>
            
			<div className="columna1">
                <div className="IdProducto">
                    <p>Crear ID del Producto</p>
					<input className= 'idinput' type="text" name="user" required />
                    {/* <input type="submit" value="Crear"/>  */ }
            	</div>

            <div className="descripcion">
                <p className='txtdescription'>Descripción del Producto</p>
				<input type="text" name="user"/>
				
            </div>

			<div className="Idproducto1">
				<form className="">
					<label>
						Estado:
					<select className='selectstate'>
						<option>Disponible</option>
						<option>No Disponible</option>
					</select>
					</label>
				</form>
				
				<p>Valor Unitario:
				<input className='inputvalue' type="text" name="user" />
				</p>
			</div>

			<div className="botonRegistrar">
				<input type="submit" value="Registrar"/>
			</div>
           
            </div>
			
		</div>		
       
    
    )
}

export default vehiculos
