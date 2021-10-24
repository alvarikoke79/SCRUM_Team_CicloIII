import {getDB} from '../../db/db.js' //se debe salir de la carpeta ventas y de la carpeta views
import { ObjectId } from 'mongodb';

const queryAllventas = async (callback)=>{
    //se crea la conexion con la base de datos 
    const conexion = getDB();
    await conexion.collection("ventas").find({}).limit(50).toArray(callback);
};
const consultarVentas = async (id,callback) =>{
    const conexion = getDB();
    await conexion.collection("ventas").findOne({_id: new ObjectId(id)}, callback);
};
const crearVentas = async (datosVentas,callback)=>{
    //implementar códifo para crear un Ventas en la BD
    
    console.log('llaves:  ', Object.keys(datosVentas)); //forma de sacvar las llaves del objeto de entrada
    //se valida si todas las keys están y si estan bien nombradas
    if(
        Object.keys(datosVentas).includes('cantidad') &&
        Object.keys(datosVentas).includes('vendedor') &&
        Object.keys(datosVentas).includes('idVenta') &&
        Object.keys(datosVentas).includes('fechaVenta') &&
        Object.keys(datosVentas).includes('ccCliente') &&
        Object.keys(datosVentas).includes('nombreCliente') &&
        Object.keys(datosVentas).includes('estadoVenta') &&
        Object.keys(datosVentas).includes('productos')
       /* 
        Object.keys(datosVentas).includes('ValorTotalVenta') &&
        Object.keys(datosVentas).includes('CantidadVenta') &&
        Object.keys(datosVentas).includes('precioUniVenta') &&
        
        
        
        Object.keys(datosVentas).includes('ccVendedor') &&
        Object.keys(datosVentas).includes('nombreVendedor') */

    ){ 
        //implmentar código para crear Ventas en la base de datos 
        //Dentro de la colección ControlSales se crea la base de datos ventas  
        //insertOne inserta un Ventas en la base de datos porductos, se coloca lo que se quiere meter y un callback
        //Se coloca una función anonima
        const conexion = getDB(); //se llama a la función get para traer la base de datos
        await conexion.collection('ventas').insertOne(datosVentas,callback);
    }else {
        return 'error';
    }
    
    
};

// para editar se utiliza findOneAndUpdate, esta recibe 3 parámetros (filtro,)
// upsert:true , si no encuenta el filtro, crea una nueva función 
//returnOriginial devulve el dato orginial para comparar 
//operacione es una operación atómica necesaria para la BD
const editarVentas = async (id,edicion,callback)=>{
    
    const filtroVentas = {_id:new ObjectId(id)}; //se coloca el identificador único _id  
    //delete edicion.id; //se elimina el di para que no quede guardado en la base de datos (esto se hace cuando la consulta se hace en el body y no en el )
    const operacion = {
        $set:edicion,
    }
    const conexion = getDB();
    await conexion.collection('ventas').findOneAndUpdate(filtroVentas,operacion,{upsert:true, returnOriginal:true},callback);


};

const eliminarVentas = async (id,callback)=>{
    const filtroVentas = {_id:new ObjectId(id)}; //se coloca el identificador único _id  
    const conexion = getDB();
    await conexion.collection('ventas').deleteOne(filtroVentas,callback);

};
export{queryAllventas, crearVentas,editarVentas,eliminarVentas,consultarVentas};