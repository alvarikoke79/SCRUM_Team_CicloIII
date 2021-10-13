import React from 'react'

const clientes = () => {
    return (
        <div className="box1">
			<div className="columna1">
				<l2 className="title">Maestro de Productos:</l2>
				<form action="">
				<div className="Idproducto">
					<p>ID de producto:</p>
					<input type="text" name="user" required />
					<button className ='btnSearch' type='submit'>Buscar</button>
				</div>
				<div className="Idproducto1">
					<p>Valor Unitario:</p>
					<input type="text" name="user" />
				</div>
				<div className="Idproducto1">
					<p>Estado:</p>
					<input type="text" name="user" />
				</div>
				<div className="DetalleProducto">
					<p>Descripción del producto:</p>
					<input type="text" name="user"/>
				</div>
				<div className="botons">
				<button className ='btnEdit' type='submit'>Editar</button>
				<button className ='btnSave'type='submit'>Guardar</button>
					
				</div>
				</form>
			</div>
						
		</div>
        
    )
}

export default clientes
