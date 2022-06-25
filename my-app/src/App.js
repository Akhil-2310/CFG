import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
import Header from './Components/Navbar/Header';
import ShowInventory from './ShowInventory';

function App() {
  
  return (
    <div className="App">
      {/* <Header/> */}
      <ShowInventory/>
      {/* <Cart/> */}
    </div>
  );
}

export default App;
