import logo from "./logo.svg";
import "./App.css";
import Mail from "./components/Mail";
import Selector from "./components/Selector";
import NombreApellidos from "./components/NombreApellidos";
import Sex from "./components/Sex";
import Descripcion from "./components/Descripcion";
import Info from "./components/Info";
import Condiciones from "./components/Condiciones";
import Boton from "./components/Boton";
function App() {
  return (
    <div className="Formulario de registro">
      <h1>Formulario de registro</h1>
      <div>
        <NombreApellidos />
      </div>

      <div>
        <Sex />
      </div>
      <div>
        <Mail />
      </div>
      <div>
        <Selector />
      </div>
      <div>
        <Descripcion />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <Condiciones />
      </div>
      <div>
        <Boton />
      </div>
    </div>
  );
}

export default App;
