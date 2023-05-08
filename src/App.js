import { useState } from 'react';
import './App.css';

const carsLimit = 10
const bikesLimit = 5

const initCarsParking = new Array(carsLimit).fill(false)
function App() {
  const [carsParking, setCarsParking] = useState(initCarsParking)

  const addCar = (spaceNum) => {
    carsParking[spaceNum] = true
    setCarsParking([...carsParking])
  }

  return (
    <div className="App">
      <h1>Parking de coches</h1>
      <div>
        {carsParking.map((filled, i) => {
          return (
            <div>
              Plaza {i}
              {filled ? "Ocupada" : "Libre"}
              <button onClick={() => {
                addCar(i)
              }}>Aparcar</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
