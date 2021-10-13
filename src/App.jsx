import Login from 'pages/Login';
/*import Registro from 'pages/Registro';*/
/*import Index from 'pages/Index';*/
import Admin from 'pages/admin/Index';
import Registroproductos  from 'pages/admin/RegistroProductos';
import Maestroproductos from 'pages/admin/MaestroProductos';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'styles/styles.css'
/*import PublicLayout from 'layouts/PublicLayout';*/
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';

function App() {
  return (
  <Router>
    <Switch>
    <Route path ={['/admin','/admin/RegistroProductos','/admin/MaestroProductos']} >
      <PrivateLayout>
        <Switch>
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
