import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

 //CRUD DE PRODUCTOS
export const registrarProductos = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/productos',
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

export	const obtenerProductos = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'http://localhost:5000/productos',
  headers:{
    Authorization: getToken()
  },
  };
    await axios.request(options).then(successCallback).catch(errorCallback);
        
};

export const editarProducto= async (id,data,successCallback, errorCallback)=>{

  const options = {
      method: 'PATCH',
      url: `http://localhost:5000/productos/${id}`,
      headers: {'Content-Type': 'application/json', Authorization: getToken()},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);

  };

export const eliminarProducto= async (id,successCallback, errorCallback)=>{
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/productos/${id}/`,
      headers: {'Content-Type': 'application/json', Authorization: getToken()},
    
    };
      await axios.request(options).then(successCallback).catch(errorCallback);
  
    };

/*
//CRUD DE USUARIOS 

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' ,
    headers:{
      Authorization: getToken(),
    }
  };
    await axios.request(options).then(successCallback).catch(errorCallback)
  };

  export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/usuarios/self',
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
*/
export const editarUsuario= async (id,data,successCallback, errorCallback)=>{
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
    data,
  };
    await axios.request(options).then(successCallback).catch(errorCallback);
    };

export const eliminarUsuario= async (id,successCallback, errorCallback)=>{
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
  };
    await axios.request(options).then(successCallback).catch(errorCallback);

  };

// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/ventas' ,
  headers:{
    Authorization: getToken(),
  }
};
  await axios.request(options).then(successCallback).catch(errorCallback)
};
export const editarVenta= async (id,data,successCallback, errorCallback)=>{
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/ventas/${id}`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta= async (id,successCallback, errorCallback)=>{
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/ventas/${id}/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
  };
    await axios.request(options).then(successCallback).catch(errorCallback);

  };


// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
/*
export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
*/