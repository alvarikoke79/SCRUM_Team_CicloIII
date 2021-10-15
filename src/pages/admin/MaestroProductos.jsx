import React from 'react'

const MaestroProductos = () => {
    return (
        <div className="box1">
			<div className="columna1">

				<label htmlFor=""></label>
				<p className="title">Maestro de Productos:</p>
				<form action="">
				<div className="Idproducto">
				<label htmlFor=""></label>
					<p>ID de producto:</p>
					<input  type="text" name="id" required />
					<button className ='btnSearch' type='submit'>Buscar</button>
				</div>
				<div className="Idproducto1">
					<p>Valor Unitario:</p>
					<input type="text" name="unitValue" />
				</div>
				<div className="Idproducto1">
					<p>Estado:</p>
					<input type="text" name="state" />
				</div>
				<div className="DetalleProducto">
					<p>Descripción del producto:</p>
					<input type="text" name="Description" />
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

export default MaestroProductos;
