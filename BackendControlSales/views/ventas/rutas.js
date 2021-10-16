//se crea la ruta para leer los datos de ventas en el servidor  
// para get hay dos parámetros (ruta,función a ejecutar cuando se llama a la ruta(colback))
//lineas que se ejecutan cuando llega como pedido un get a esa ruta 
//a la función anónima (la arrow function) le entran dos parámetros importantes 
//req = request , quien esta haciendo la solicitud
//res = respuesta para el navegador; res.send sería enviar respuesta. el rest puede regresar código HTML (curiosidad nomás)
//el const hace las veces de lo que tendríamos en la base de datos 
//después se colocan las lineas para preguntar a la base de datos 
import Express from 'express';
import {getDB} from '../../db/db.js' //se debe salir de la carpeta ventas y de la carpeta views
import { queryAllventas,crearVentas,editarVentas,eliminarVentas,consultarVentas } from '../../controllers/ventas/controller.js';

const rutasVentas = Express.Router(); //se usa para hacer algo similiar a react, es para enlazar las rutas con el server

//se crea un callback generico para que peuda resivir una res, y retorne otra función con el error y el result 

const genercCallback = (res)=>(err,result)=>{
    if (err){
        res.status(400).send('Error consultando los ventas');
    }else{
        res.json(result); //se regresa el resultado de la base de datos 
    }
};
//En lugar de app. se trabaja con rutasVentas
// antes: app.get('/ventas',(req,res)=>{
//ahora: rutasVentas.route('/ventas').get((req,res)=>{
rutasVentas.route('/ventas').get((req,res)=>{
    console.log('alguien hizo get en la ruta ventas');
     //primero entra el res para el callback genérico, luego generc regresa el err y el result, estos entran 
     // a la función query, luego de esta ejecutarse manda a ejecutar generic para que se cree el archivo .json
     // y pueda ser enviado al front como respuesta, ya sea un error o el resultado que se espera 
     //estas son funciones anidadas.
    

    queryAllventas(genercCallback(res));
});

rutasVentas.route('/ventas/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta ventas');
     
    

    consultarVentas(req.params.id, genercCallback(res));
});

//Se crea la ruta para un nuevo Ventas con post 
rutasVentas.route('/ventas').post((req,res)=>{
    crearVentas(req.body, genercCallback(res))
});

//Se crea la ruta patch, edición de la base de datos 


rutasVentas.route('/ventas/:id').patch((req,res)=>{
    editarVentas(req.params.id,req.body, genercCallback(res));
});
//Se crea la ruta delete 
//delete one encuenta y elimina ese Ventas

rutasVentas.route('/ventas/:id').delete((req,res)=>{
    eliminarVentas(req.params.id,genercCallback(res));
    
});

export default rutasVentas;