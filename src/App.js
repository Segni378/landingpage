import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import WeOffer from './components/WeOffer/weOffer';
import ShopNow from './components/ShopNow/shopNow';
import ChooseUs from './components/ChooseUs/chooseUs'
import SustainableBrands from './components/SustainableBrands/sustainableBrands'
import JoinUs from './components/JoinUs/joinUs'
import Footer from './components/Footer/footer'
import CopyRight from './components/Copyright/copyright'
import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WeOffer />
      <ShopNow />
      <ChooseUs />
      <SustainableBrands />
      <JoinUs />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
