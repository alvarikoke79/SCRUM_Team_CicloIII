
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './Inicio/inicio';
import MaestroProd from './MaestroProd/maestroProd';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/maestrodProduct'>
          <MaestroProd/>
        </Route>
        <Route path='/'>
          <Inicio/>
        </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
