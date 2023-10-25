import './App.css';
import {useState} from "react";
import BinarySpacePartitionTree from "./BinarySpacePartitionTree";
import MapDisplay from "./components/MapDisplay";

function App() {
    const [mapHeight, setMapHeight] = useState(100)
    const [mapWidth, setMapWidth] = useState(100)
    const [seed, setSeed] = useState()
    const [minNodeHeight, setMinNodeHeight] = useState(25)
    const [minNodeWidth, setMinNodeWidth] = useState(25)
    const [minRoomHeight, setMinRoomHeight] = useState(5)
    const [minRoomWidth, setMinRoomWidth] = useState(5)

    const [tree, setTree] = useState()

    const onSubmit = () => {
        console.log('clickity')
        const options = {
            seed: (!seed || seed.trim() === '') ? undefined : seed,
            minNodeHeight,
            minNodeWidth,
            minRoomHeight,
            minRoomWidth,
        }
        const tree = new BinarySpacePartitionTree(mapWidth, mapHeight, options)
        tree._subdivide()
        tree.buildRooms()
        tree.buildCorridors()
        // tree.dumpMap()
        setTree(tree)
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>2D Dungeon Generator</h1>
      </header>
      <div className="App-display-options">
          <div className="App-display-item">
              <label>Map Height
                <input className="App-display-input" type="number" name="mapHeight" value={mapHeight}
                       onChange={e => setMapHeight(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-item">
              <label>Map Width
                  <input className="App-display-input" type="number" name="mapWidth" value={mapWidth}
                         onChange={e => setMapWidth(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-item">
              <label>Partition Minimum Height
                  <input className="App-display-input" type="number" name="minNodeHeight" value={minNodeHeight}
                         onChange={e => setMinNodeHeight(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-item">
              <label>Partition Minimum Width
                  <input className="App-display-input" type="number" name="minNodeWidth" value={minNodeWidth}
                         onChange={e => setMinNodeWidth(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-item">
              <label>Room Minimum Height
                  <input className="App-display-input" type="number" name="minRoomHeight" value={minRoomHeight}
                         onChange={e => setMinRoomHeight(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-item">
              <label>Room Minimum Width
                  <input className="App-display-input" type="number" name="minRoomWidth" value={minRoomWidth}
                         onChange={e => setMinRoomWidth(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-item">
              <label>Generation Seed
                  <input className="App-display-input" type="text" name="seed" value={seed}
                         onChange={e => setSeed(e.target.value)}/>
              </label>
          </div>
          <div className="App-display-button">
              <button onClick={onSubmit}>Generate a Dungeon!</button>
          </div>
      </div>
      <div className="App-generator-notes">
        <p>If a particular input will cause a failure, e.g., too small a partition width
            in comparison to the room's minimum size, then a default value will be used instead.
        </p>
      </div>
        <div className="App-map-display">
            { tree && <MapDisplay mapData={tree.mapData}></MapDisplay> }
        </div>
      <footer className="App-footer">
          <p>Created by Lori L. Gildersleeve © 2023</p>
      </footer>
    </div>
  );
}

export default App;