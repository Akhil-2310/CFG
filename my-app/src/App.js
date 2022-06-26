import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
// import Header from '../src/Components/Navbar/Header';
import Display from './Components/donorpage/Display';
import ShowInventory from './ShowInventory';
import CardsList from './CardsList';
import Donate from './Components/donorpage/Donate';
import PayPal from './Components/PayPal';
import React, {useState} from "react";


function App() {
const [checkout,setCheckOut] = useState(false)
  const users=[{
    "corporate":true,
    "donation":{
      "rice":"500"
    },
    "email":"dfsd@gmail.com",
    "name":"hello",
    "phone":"9380309384"
  }]
  return (
    <div className="App">
    {checkout ? (
    <PayPal />
     ) : (
    
    <button onClick={()=>{setCheckOut(true)}}>Checkout</button>)}
      <ShowInventory/>
      {/* <Display users={users}/> */}
      {/* <Header/> */}
      
   
      {/* <Header/> */}
      {/* <ShowInventory/> */}
      {/* <Donate/> */}
      {/* <CardsList/> */}
      
      {/* <Display users={users}/> */}
      {/* <ShowInventory/>
      
      
      <Display users={users}/> */}
      {/* <Header/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
