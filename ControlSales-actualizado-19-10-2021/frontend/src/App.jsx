import Login from 'pages/Login';
import Registroproductos  from 'pages/admin/RegistroProductos';
import Maestroproductos from 'pages/admin/MaestroProductos';
import Maestroventas from 'pages/admin/MaestroVentas';
import Registroventas from 'pages/admin/RegistroVentas';
import Gestionusuarios from 'pages/admin/GestionUsuarios'
import Admin from 'pages/admin/Index';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'styles/styles.css'
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';

function App() {
  
  return (
    <div className='App'>
    <Auth0Provider
    domain="control-sales-app.us.auth0.com"
    clientId="oRG693XYOT1YEQvdGvLKaD0d4aNLrai3"
    redirectUri="http://localhost:3000/admin/RegistroProductos"
    >
  <Router>
    <Switch>
    <Route path ={['/admin','/admin/RegistroProductos','/admin/MaestroProductos','/admin/RegistroVentas','/admin/MaestroVentas', '/admin/GestionUsuarios' ]} >
      <PrivateLayout>
        <Switch>
        <Route path ='/admin/GestionUsuarios'>
            <Gestionusuarios/>
          </Route>
        <Route path ='/admin/MaestroVentas'>
            <Maestroventas/>
          </Route>
        <Route path ='/admin/RegistroVentas'>
            <Registroventas/>
          </Route>
          <Route path ='/admin/RegistroProductos'>
            <Registroproductos/>
          </Route>
          <Route path ='/admin/MaestroProductos'>
            <Maestroproductos/>
          </Route>
          <Route path ='/admin/'>
            <Registroproductos/>
          </Route>
        </Switch>
      </PrivateLayout>      
      </Route>  
      <Route path = {['/']}>
        <AuthLayout>
        <Switch>
          <Route path = '/'>
            <Login/>
          </Route>
        </Switch>
        </AuthLayout>
      </Route>
    </Switch>
  </Router>  
  </Auth0Provider>
  </div>
  );
}

export default App;
