//se crea la ruta para leer los datos de productos en el servidor  
// para get hay dos parámetros (ruta,función a ejecutar cuando se llama a la ruta(colback))
//lineas que se ejecutan cuando llega como pedido un get a esa ruta 
//a la función anónima (la arrow function) le entran dos parámetros importantes 
//req = request , quien esta haciendo la solicitud
//res = respuesta para el navegador; res.send sería enviar respuesta. el rest puede regresar código HTML (curiosidad nomás)
//el const hace las veces de lo que tendríamos en la base de datos 
//después se colocan las lineas para preguntar a la base de datos 
import Express from 'express';
import {getDB} from '../../db/db.js' //se debe salir de la carpeta productos y de la carpeta views
import { queryAllProductos,crearProducto,editarProducto,eliminarProducto,consultarProducto } from '../../controllers/productos/controller.js';

const rutasProducto = Express.Router(); //se usa para hacer algo similiar a react, es para enlazar las rutas con el server

//se crea un callback generico para que peuda resivir una res, y retorne otra función con el error y el result 

const genercCallback = (res)=>(err,result)=>{
    if (err){
        res.status(400).send('Error consultando los productos');
    }else{
        res.json(result); //se regresa el resultado de la base de datos 
    }
};
//En lugar de app. se trabaja con rutasProducto
// antes: app.get('/productos',(req,res)=>{
//ahora: rutasProducto.route('/productos').get((req,res)=>{
rutasProducto.route('/productos').get((req,res)=>{
    console.log('alguien hizo get en la ruta productos');
     //primero entra el res para el callback genérico, luego generc regresa el err y el result, estos entran 
     // a la función query, luego de esta ejecutarse manda a ejecutar generic para que se cree el archivo .json
     // y pueda ser enviado al front como respuesta, ya sea un error o el resultado que se espera 
     //estas son funciones anidadas.
    

    queryAllProductos(genercCallback(res));
});

rutasProducto.route('/productos/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta productos');
     
    

    consultarProducto(req.params.id, genercCallback(res));
});

//Se crea la ruta para un nuevo producto con post 
rutasProducto.route('/productos').post((req,res)=>{
    crearProducto(req.body, genercCallback(res))
});

//Se crea la ruta patch, edición de la base de datos 


rutasProducto.route('/productos/:id').patch((req,res)=>{
    console.log("esto es el rq.body", req.body)
    editarProducto(req.params.id,req.body, genercCallback(res));
});
//Se crea la ruta delete 
//delete one encuenta y elimina ese producto

rutasProducto.route('/productos/:id').delete((req,res)=>{
    eliminarProducto(req.params.id,genercCallback(res));
    
});

export default rutasProducto;