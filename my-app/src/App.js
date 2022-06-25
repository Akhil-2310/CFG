import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
// import Header from '../src/Components/Navbar/Header';
import Display from './Components/donorpage/Display';
import ShowInventory from './ShowInventory';

function App() {
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
      <ShowInventory/>
      {/* <Display users={users}/> */}
      {/* <Header/> */}
      
   
      {/* <Header/> */}
      {/* <ShowInventory/>
      
      
      <Display users={users}/> */}
      {/* <Header/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
