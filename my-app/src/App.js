import './App.css';
import Home from '../src/Components/Home/Home'
import Cart from './Components/donorpage/Cart';
import Header from './Components/Navbar/Header';
import Display from './Components/donorpage/Display';

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
      <Display users={users}/>
      <Header/>
      {/* <Cart/> */}
    </div>
  );
}

export default App;
