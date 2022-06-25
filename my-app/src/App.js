import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
import Header from './Components/Navbar/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  
  return (

    <div className="App">
      <Header/>
      <Cart/>
    </div>
  );
}

export default App;
