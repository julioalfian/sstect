import './App.css';
import { Star } from './Star';
import { Order } from './Order'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Star/>
        <Order data={['A', 'B', 'C']}/>
      </header>
    </div>
  );
}

export default App;
