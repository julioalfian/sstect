import logo from './logo.svg';
import './App.css';
import { Star } from './Star';
import { Order } from './Order';

function App() {
  return (
    <div className="App">
      <Star/>
      <div className='line'></div>
      <Order data={['A', 'B', 'C']}/>
    </div>
  );
}

export default App;
