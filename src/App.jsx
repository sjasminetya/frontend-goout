import './App.css';
import Banner from './components/layouts/Banner/Banner';
import Discount from './components/layouts/Discount/Discount';
import Explore from './components/layouts/Explore/Explore';
import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';
import Package from './components/layouts/Package/Package';
import Service from './components/layouts/Service/Service';

const App = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="h-full w-full px-5 lg:px-[100px]">
        <Header />
        <Banner />
        <Service />
        <Package />
        <Explore />
        <Discount />
      </div>
      <Footer />
    </div>
  );
};

export default App;
