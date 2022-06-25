import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
// import Header from '../src/Components/Navbar/Header';
import Display from './Components/donorpage/Display';
import ShowInventory from './ShowInventory';
import CardsList from './CardsList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donate from './Components/donorpage/Donate';
import AdminListItem from './Components/AdminListItem';
import AdminListItemForm from './Components/AdminListItemForm';
import AdminList from './AdminList';
import Header from './Components/Navbar/Header'
import ShowDonors from './Admin_don';
import ShowAmount from './Amount';


function App() {
  const users = [{
    "corporate": true,
    "donation": {
      "rice": "500"
    },
    "email": "dfsd@gmail.com",
    "name": "hello",
    "phone": "9380309384"
  }]

  return <BrowserRouter>
    {/* Nested routing */}
    <Routes>
      {/* whatever we write in home would be there in all other components */}
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='listitems' element={<CardsList />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<h1>Checkout</h1>} />
        <Route path='donate' element={<Donate/>} />
        {/* <Route path='cart' element ={<Cart/>}/> */}
    
      </Route>

    </Routes>
  </BrowserRouter>



}

export default App;
