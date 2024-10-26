import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import ShowData from './components/ShowData/ShowData.jsx';
import { useState } from 'react';

const App = () => {
  const [coins, setCoins] = useState(0);

  const increaseCoins = () => {
    setCoins(coins + 20000);
  }
  return (
    <div>
      <Navbar coins={coins}/>
      <Banner increaseCoins={increaseCoins}/>
      <ShowData coins={coins} setCoins={setCoins}></ShowData>
    </div>
  );
};

export default App