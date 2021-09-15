import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes clases

//componentes funcionales
function App() {
  const jsx = <h1>Johanna Barros</h1>
  let styles = { 
    color: 'red'
  }
  const stylesJsx = (
  <div style={styles}>
    <p>{jsx}</p>
    </div>
    )
  return (
    <div className="App"><NavBar />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        {stylesJsx}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
