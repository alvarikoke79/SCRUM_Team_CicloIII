import {getDB} from '../../db/db.js' //se debe salir de la carpeta usuarios y de la carpeta views
import { ObjectId } from 'mongodb';
import jwt_decode from 'jwt-decode';

const queryAllUsuarios = async (callback)=>{
    //se crea la conexion con la base de datos 
    const conexion = getDB();
    await conexion.collection("usuarios").find({}).limit(50).toArray(callback);
};
const consultarUsuario = async (id,callback) =>{
    const conexion = getDB();
    await conexion.collection("usuarios").findOne({_id: new ObjectId(id)}, callback);
};
const consultarOCrearUsuario = async (req, callback) => {
    // 6.1. obtener los datos del usuario desde el token
    const token = req.headers.authorization.split('Bearer ')[1];
    //console.log(jwt_decode(token));
    const user = jwt_decode(token)['http://localhost/userData'];
    console.log(user);
  
    // 6.2. con el correo del usuario o con el id de auth0, verificar si el usuario ya esta en la bd o no
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuario').findOne({ email: user.email }, async (err, response) => {
      console.log('response consulta bd', response);
      if (response) {
        // 7.1. si el usuario ya esta en la BD, devuelve la info del usuario
        callback(err, response);
      } else {
        // 7.2. si el usuario no esta en la bd, lo crea y devuelve la info
        user.auth0ID = user._id;
        delete user._id;
        user.rol = 'sin rol';
        user.estado = 'pendiente';
        await crearUsuario(user, (err, respuesta) => callback(err, user));
      }
    });
  };
const crearUsuario = async (datosUsuario,callback)=>{
    //implementar códifo para crear un usuario en la BD
    console.log('llaves:  ', Object.keys(datosUsuario)); //forma de sacvar las llaves del objeto de entrada
    //se valida si todas las keys están y si estan bien nombradas
    if(
        Object.keys(datosUsuario).includes('cedula') &&
        Object.keys(datosUsuario).includes('nombres') &&
        Object.keys(datosUsuario).includes('apellidos') &&
        Object.keys(datosUsuario).includes('rol') &&
        Object.keys(datosUsuario).includes('estado') &&
        Object.keys(datosUsuario).includes('user')
    ){ 
        //implmentar código para crear usuario en la base de datos 
        //Dentro de la colección ControlSales se crea la base de datos usuarios  
        //insertOne inserta un usuario en la base de datos porductos, se coloca lo que se quiere meter y un callback
        //Se coloca una función anonima
        const conexion = getDB(); //se llama a la función get para traer la base de datos
        await conexion.collection('usuarios').insertOne(datosUsuario,callback);
    }else {
        return 'error';
    }
    
    
};

// para editar se utiliza findOneAndUpdate, esta recibe 3 parámetros (filtro,)
// upsert:true , si no encuenta el filtro, crea una nueva función 
//returnOriginial devulve el dato orginial para comparar 
//operacione es una operación atómica necesaria para la BD
const editarUsuario = async (id,edicion,callback)=>{
    console.log("esto es lo que entra",id, edicion )
    
    const filtroUsuario = {_id:new ObjectId(id)}; //se coloca el identificador único _id  
    //delete edicion.id; //se elimina el di para que no quede guardado en la base de datos (esto se hace cuando la consulta se hace en el body y no en el )
    const operacion = {
        $set:edicion,
    }
    const conexion = getDB(); 
    await conexion.collection('usuarios').findOneAndUpdate(filtroUsuario,operacion,{upsert:true, returnOriginal:true},callback);
};

const eliminarUsuario = async (id,callback)=>{
    const filtroUsuario = {_id:new ObjectId(id)}; //se coloca el identificador único _id  
    const conexion = getDB();
    await conexion.collection('usuarios').deleteOne(filtroUsuario,callback);

};
export{queryAllUsuarios, 
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarOCrearUsuario,};
