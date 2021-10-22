//hacer el import de express treadicional 
//const express = require('express');

//import con el type module en el package.json
import  Express  from "express";
import dotenv from 'dotenv';
import Cors from 'cors'
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import {conectarBD} from './db/db.js' //se trae la función de conexión a la base de datos y la variable de conexion
import rutasProducto from "./views/productos/rutas.js";
import rutasVentas from "./views/ventas/rutas.js";
dotenv.config({path: './.env'}); //se llama el archivo por medio de un config y se coloca la dirección donde se encuentra


//a app (aplicación) se le agrega todo lo que necesitamos, como rutas y métodos
// lo primero es decirle a la app que se prenda o escuche lo que llega de un 
//puerto especifico, esto se hace con .listen
const app = Express();

//funciones que sirven en express, app.use me permite usar diferentes herramientas ejemplo JSON 
app.use(Express.json()); //esto permit eque cuando llegue un json, lo pasa un objeto que se peude utilizar 
app.use(Cors());

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://control-sales-app.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://api.control.sales.app',
  issuer: 'https://control-sales-app.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.use(rutasProducto)
app.use(rutasVentas)
//conectarse a la base de datos



//este main se va a conectar la base de datos y luego retornar el .listen
// se peude copiar y pegar sin problemas 

const main = ()=>{
    //esta parte de client es documentación de mongo y se peude copiar y pegar (complicada de memorizar)
    return app.listen(process.env.PORT,()=>{
            console.log(`escuchando por el puerto ${process.env.PORT}` );
        });

};

conectarBD(main);