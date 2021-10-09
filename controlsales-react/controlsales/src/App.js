
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio  from './inicio/inicio';
import MaestrodV from './MaestrodeVentas/maestrodeVentas';
/*import Login  from './login/loginpage';*/
import GUsuarios from './GestionUsuarios/Gusuarios'




function App() {
  return (

    <Router>
      <Switch>
        <Route path='/GestionUsuario' exact>
          <GUsuarios/>
        </Route>

        <Route path='/maestrodVentas' exact>
          <MaestrodV/>  
        </Route>

        <Route path='/' exact>
          <Inicio/> 
        </Route>
{/*
        <Route path='/' exact>
          <Login/> 
        </Route>
*/ }          
      </Switch>
      
    </Router>
       

   
  );
}

export default App;
