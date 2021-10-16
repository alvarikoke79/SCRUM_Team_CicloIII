import {getDB} from '../../db/db.js' //se debe salir de la carpeta productos y de la carpeta views
import { ObjectId } from 'mongodb';

const queryAllProductos = async (callback)=>{
    //se crea la conexion con la base de datos 
    const conexion = getDB();
    await conexion.collection("productos").find({}).limit(50).toArray(callback);
};
const consultarProducto = async (id,callback) =>{
    const conexion = getDB();
    await conexion.collection("productos").findOne({_id: new ObjectId(id)}, callback);
};
const crearProducto = async (datosProducto,callback)=>{
    //implementar códifo para crear un producto en la BD
    
    console.log('llaves:  ', Object.keys(datosProducto)); //forma de sacvar las llaves del objeto de entrada
    //se valida si todas las keys están y si estan bien nombradas
    if(
        Object.keys(datosProducto).includes('idProduct') &&
        Object.keys(datosProducto).includes('DescriptionProduct') &&
        Object.keys(datosProducto).includes('stateProduct') &&
        Object.keys(datosProducto).includes('unitValueProduct')

    ){ 
        //implmentar código para crear producto en la base de datos 
        //Dentro de la colección ControlSales se crea la base de datos productos  
        //insertOne inserta un producto en la base de datos porductos, se coloca lo que se quiere meter y un callback
        //Se coloca una función anonima
        const conexion = getDB(); //se llama a la función get para traer la base de datos
        await conexion.collection('productos').insertOne(datosProducto,callback);
    }else {
        return 'error';
    }
    
    
};

// para editar se utiliza findOneAndUpdate, esta recibe 3 parámetros (filtro,)
// upsert:true , si no encuenta el filtro, crea una nueva función 
//returnOriginial devulve el dato orginial para comparar 
//operacione es una operación atómica necesaria para la BD
const editarProducto = async (id,edicion,callback)=>{
    
    const filtroProducto = {_id:new ObjectId(id)}; //se coloca el identificador único _id  
    //delete edicion.id; //se elimina el di para que no quede guardado en la base de datos (esto se hace cuando la consulta se hace en el body y no en el )
    const operacion = {
        $set:edicion,
    }
    const conexion = getDB();
    await conexion.collection('productos').findOneAndUpdate(filtroProducto,operacion,{upsert:true, returnOriginal:true},callback);


};

const eliminarProducto = async (id,callback)=>{
    const filtroProducto = {_id:new ObjectId(id)}; //se coloca el identificador único _id  
    const conexion = getDB();
    await conexion.collection('productos').deleteOne(filtroProducto,callback);

};
export{queryAllProductos, crearProducto,editarProducto,eliminarProducto,consultarProducto};