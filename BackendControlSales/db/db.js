import { MongoClient } from "mongodb"; //se importa mongoclient para conectarse a la base de datos, esta es una clase 
import dotenv from 'dotenv';

dotenv.config({path: './.env'}); //se llama el archivo por medio de un config y se coloca la dirección donde se encuentra

const stringConexion = process.env.DATABASE_URL; //con process se llama env y por ultimo lo que se quiere llamar del archivo

const client = new MongoClient(stringConexion,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

let conexion; //String golbal de la base de datos 

//se crea una función para conectarse a la base de datos 
//un callback es una función que se ejecuta despues de que se logra ejecutar otra función 
//en este caso si se logra hacer la conxión, se ejecute la función main
const conectarBD = (callback)=>{
    //esta parte de client es documentación de mongo y se peude copiar y pegar (complicada de memorizar)
    client.connect((err,db)=>{
        if(err){
            console.error("error conectando a la base de datos");
        }
        conexion = db.db('ControlSales'); //se conecta a la colección ControlSales
        console.log("conexion exitosa");
        return callback();//regresa la función que se introdujo a conectar BD, es decir, se ejecuta
        });
    
};

//Función que retorna la variable conxion, que sría la conexión con las BD 
const getDB =()=>{
    return conexion;
};

export {conectarBD,getDB};