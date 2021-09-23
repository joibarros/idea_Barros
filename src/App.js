import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//componentes clases

// class Application extends Component {
//   render() {
// <h1>Hola</h1>
//   }
// }

//componentes funcionales
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenido a Mini Petit'/>
    </div>
  );
}

export default App;



