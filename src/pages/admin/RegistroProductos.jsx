
import React, {useEffect, useState} from 'react';

const vehiculos = () => {
    
    return (
       
       <div className = 'mainRegPrduct'>
        <form className='formProductos'> 
        <div className='titleRegProductts'>
        <h2 >Formulario Registro de Productos </h2>
        </div>
        
            <input className = 'IdPrduct'  type="text" placeholder = 'Id del producto' />
            <input className = 'DesPrduct' type="text" placeholder = 'Descripcion del producto' />
            <input className = 'statePrduct' type="text" placeholder = 'Estado del producto (disponible o no disponible)' />
            <input className = 'ValuePrduct' type="number" placeholder = 'Valor unitario'/>
            <button className = 'RegisterProductboton'>Confirmar y registrar</button>
        </form>
        </div> 
    )
}

export default vehiculos
