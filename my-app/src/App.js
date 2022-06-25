import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
import Header from './Components/Navbar/Header';
import Inv from './App_inv';

function App() {

  return (
    <div className="App">
      <Header />
      <Inv />
      {/* <Cart/> */}
    </div>
  );
}

export default App;
