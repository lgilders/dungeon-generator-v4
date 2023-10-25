import logo from './logo.svg';
import './App.css';
import MapDisplay from "./components/MapDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>2D Dungeon Generator</h1>
      </header>
      <MapDisplay></MapDisplay>
    </div>
  );
}

export default App;
