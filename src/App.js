import './App.css';
import Products from './Component/Products/Products';

import Props from './Component/Props/Props';
import UseState from './Component/UseState/UseState';

function App() {
  return (
    <div className="App">
      <h2>Fruits and Vegetable Store</h2>
      <Products></Products>
      <Props></Props>
      <UseState></UseState>
    </div>
  );
}

export default App;
