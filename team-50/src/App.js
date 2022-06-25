import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Home/>
      <Contact/>
      <Login/>
      <About/>
    </div>
  );
}

export default App;
