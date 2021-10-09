
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio  from './inicio/inicio';
import MaestrodV from './MaestrodeVentas/maestrodeVentas';
import RegistroDeVenta from './RegistroDeVenta/RegistroDeVenta';






function App() {
  return (

    <Router>
      <Switch>
        <Route path='/maestrodVentas'>
          <MaestrodV/>
          
        </Route>

        <Route path='/RegistroDeVenta'>
          <RegistroDeVenta/>
          
        </Route>

        <Route path='/'>
          <Inicio/> 
        </Route>
      </Switch>
      
    </Router>
       

   
  );
}

export default App;
