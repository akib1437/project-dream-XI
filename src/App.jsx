import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import ShowData from './components/ShowData/ShowData.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState } from 'react';

const App = () => {
  const [credit, setCredit] = useState(0);

  const freeCredit = () => {
    setCredit(credit + 50000);
  }
  return (
    <div>
      <Navbar credit={credit}/>
      <Banner freeCredit={freeCredit}/>
      <ShowData credit={credit} setCredit={setCredit}></ShowData>
      <Footer></Footer>
    </div>
  );
};

export default App