import './App.css';
import { Parking } from './components/Parking';

const carsLimit = 10
const bikesLimit = 5

function App() {
  return (
    <div className="App">
      <Parking title="Coches" limit={carsLimit} />
      <Parking title="Motos" limit={bikesLimit} />
      <Parking title="Tractores" limit={2} />
    </div>
  );
}

export default App;