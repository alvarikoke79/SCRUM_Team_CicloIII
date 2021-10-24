<<<<<<< HEAD
//se crea la ruta para leer los datos de usuarios en el servidor  
// para get hay dos parámetros (ruta,función a ejecutar cuando se llama a la ruta(colback))
//lineas que se ejecutan cuando llega como pedido un get a esa ruta 
//a la función anónima (la arrow function) le entran dos parámetros importantes 
//req = request , quien esta haciendo la solicitud
//res = respuesta para el navegador; res.send sería enviar respuesta. el rest puede regresar código HTML (curiosidad nomás)
//el const hace las veces de lo que tendríamos en la base de datos 
//después se colocan las lineas para preguntar a la base de datos 
import Express from 'express';
import {getDB} from '../../db/db.js' //se debe salir de la carpeta usuarios y de la carpeta views
import { queryAllUsuarios,crearUsuario,editarUsuario,eliminarUsuario,consultarUsuario } from '../../controllers/usuarios/controller.js';

const rutasUsuario = Express.Router(); //se usa para hacer algo similiar a react, es para enlazar las rutas con el server

//se crea un callback generico para que peuda resivir una res, y retorne otra función con el error y el result 

const genercCallback = (res)=>(err,result)=>{
    if (err){
        res.status(400).send('Error consultando los usuarios');
    }else{
        res.json(result); //se regresa el resultado de la base de datos 
    }
};
//En lugar de app. se trabaja con rutasUsuario
// antes: app.get('/usuarios',(req,res)=>{
//ahora: rutasUsuario.route('/usuarios').get((req,res)=>{
rutasUsuario.route('/usuarios').get((req,res)=>{
    console.log('alguien hizo get en la ruta usuarios');
     //primero entra el res para el callback genérico, luego generc regresa el err y el result, estos entran 
     // a la función query, luego de esta ejecutarse manda a ejecutar generic para que se cree el archivo .json
     // y pueda ser enviado al front como respuesta, ya sea un error o el resultado que se espera 
     //estas son funciones anidadas.
    

    queryAllUsuarios(genercCallback(res));
});

rutasUsuario.route('/usuarios/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta usuarios');
     
    

    consultarUsuario(req.params.id, genercCallback(res));
});

//Se crea la ruta para un nuevo usuario con post 
rutasUsuario.route('/usuarios').post((req,res)=>{
    crearUsuario(req.body, genercCallback(res))
});

//Se crea la ruta patch, edición de la base de datos 


rutasUsuario.route('/usuarios/:id').patch((req,res)=>{
    console.log("esto es el rq.body", req.body)
    editarUsuario(req.params.id,req.body, genercCallback(res));
});
//Se crea la ruta delete 
//delete one encuenta y elimina ese usuario

rutasUsuario.route('/usuarios/:id').delete((req,res)=>{
    eliminarUsuario(req.params.id,genercCallback(res));
    
});

export default rutasUsuario;
=======
import Express from 'express';
import {
  queryAllUsers,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
  consultarUsuario,
  consultarOCrearUsuario,
} from '../../controllers/usuarios/controller.js';

const rutasUsuario = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error consultando los usuarios');
  } else {
    res.json(result);
  }
};

rutasUsuario.route('/usuarios').get((req, res) => {
  console.log('alguien hizo get en la ruta /usuarios');
  queryAllUsers(genercCallback(res));
});

rutasUsuario.route('/usuarios').post((req, res) => {
  crearUsuario(req.body, genercCallback(res));
});

rutasUsuario.route('/usuarios/self').get((req, res) => {
  console.log('alguien hizo get en la ruta /self');
  consultarOCrearUsuario(req, genercCallback(res));
  // consultarUsuario(, genercCallback(res));
});

rutasUsuario.route('/usuarios/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /usuarios');
  consultarUsuario(req.params.id, genercCallback(res));
});

rutasUsuario.route('/usuarios/:id').patch((req, res) => {
  editarUsuario(req.params.id, req.body, genercCallback(res));
});

rutasUsuario.route('/usuarios/:id').delete((req, res) => {
  eliminarUsuario(req.params.id, genercCallback(res));
});

export default rutasUsuario;
>>>>>>> dev
