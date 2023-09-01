import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './page/home/Home';
import Modalsingleweather from './page/modal/Modalsingleweather';

function App() {
  const { isOpen } = useSelector(state => state.weatherModal)

  return (
    <div className="App">
      {isOpen ? <Modalsingleweather/> : <Home/>}
      <Footer/>
    </div>
  );
}

export default App;
