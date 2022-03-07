import './App.css';
import mobileComponent from './components/mobileComponent';
let data = require('./utilis/data.json');
function App() {
  return (
    <div className="App">
      {data.map((mobile) => mobileComponent(mobile))}
    </div>
  );
}

export default App;
