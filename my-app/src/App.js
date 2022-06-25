import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
import Header from './Components/Navbar/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardsList from './CardsList';

function App() {

  return (

    <div className="App">
      
      <CardsList/>
    </div>
  );
}

export default App;
