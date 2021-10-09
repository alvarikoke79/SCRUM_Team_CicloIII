import logo from './media/logo.jpg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header> 
        <div className = "mainframe">
        <div className="login">
        <div className="Landing">
          <span className="Txlanding">
            Control Sales te permite gestionar los productos de tu negocio.
            También te permite registrar y gestionar las ventas tanto
            fisicas como virtuales. Si tu empresa ya esta usando Control Sales,
            accede desde el botón de la derecha con tu cuenta de correo de
            Google.
          </span>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <form className="frame_login">
          <input
            className="usuario"
            type="text"
            name="Usuario"
            placeholder="Usuario"
          />
                
          <input
            className="pass"
            type="password"
            name="Contraseña"
            placeholder="Contraseña"
          />
        <div className="Ini_sesion">
            <input className="button" type="submit" value="Iniciar Sesión" />
            <span className="O"> O </span>
            <div
              className="g-signin2"
              data-onsuccess="onSignIn"
              data-theme="dark"
            ></div>
        </div>  
          </form>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
