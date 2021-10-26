import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'util/api';
import { useUser } from 'context/userContext';
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const {setUserData}=useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {

      // 1. pedir token a auth0
      const accessToken = await getAccessTokenSilently({
        audience: `https://api.control.sales.app`,
      });
      // 2. recibir token de auth0
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
      // 3. enviarle el token a el backend
      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          
        },
        (err) => {
          console.log('err', err);
        }
      );
      console.log(accessToken);
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently,setUserData]);

  if (isLoading) return <ReactLoading type='balls' color='#3b61a7' height={120} width={60} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return <>{children}</>;
};

export default PrivateRoute;
