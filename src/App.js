import StarWars from './StarWars/StarWars';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <StarWars />
      </BrowserRouter>
    </div>
  );
}

export default App;
