import GrudgeContext from './Grudges/GrudgeContext';
import Grudges from './Grudges/Grudges';

function App() {
  return (
    <div className="app">
      <GrudgeContext>
        <Grudges />
      </GrudgeContext>
    </div>
  );
}

export default App;
