import React from 'react'

const clientes = () => {
    return (
        <div className="mainMaPrdut">
				<p className="titleMaPrdut">Registro de Productos</p>
				<div className="Idproduct">
					<p>ID de producto:</p>
                   
					<input type="text" name="user" required />
					<input type="submit" value="Buscar"/>
				</div>
				<div className="Idproduct1">
					<p>Valor Unitario:</p>
					<input type="text" name="user" />
				</div>
				<div className="Idproduct1">
					<p>Estado:</p>
					<input type="text" name="user" />
				</div>
				<div className="DesProduct">
					<p>Descripción del producto:</p>
					<input type="text" name="user"/>
				</div>
				<div className="butonEdit">
					<input type="submit" value="Editar"/>
					<input type="submit" value="Guardar"/>
				</div>
				
			</div>
        
    )
}

export default clientes
