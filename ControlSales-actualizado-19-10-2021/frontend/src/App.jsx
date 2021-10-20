import Login from 'pages/Login';
import Admin from 'pages/admin/Index';
import Registroproductos  from 'pages/admin/RegistroProductos';
import Maestroproductos from 'pages/admin/MaestroProductos';
import Maestroventas from 'pages/admin/MaestroVentas';
import Registroventas from 'pages/admin/RegistroVentas';
import Gestionusuarios from 'pages/admin/GestionUsuarios'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'styles/styles.css'

import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';

function App() {
  return (
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
  );
}

export default App;
