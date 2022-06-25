import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardsList from './CardsList';
import ShowInventory from './ShowInventory';
import Inv from './App_inv';

function App() {

  return (
    <div className="App">
      
      <CardsList/>
      {/* <Header/> */}
      <ShowInventory/>
      
      <Inv />
      {/* <Cart/> */}
    </div>
  );
}

export default App;
