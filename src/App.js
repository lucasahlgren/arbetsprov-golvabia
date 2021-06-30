import './App.css';
import Header from './components/header/Header';
import ProductCategories from './components/product-categories/ProductCategories';
import Campaigns from './components/campaigns/Campaigns';
import NewProducts from './components//new-products/NewProducts';
import CatalogInspiration from './components/catalog-inspiration/CatalogInspiration';
import PopularProducts from './components/popular-products/PopularProducts';
import Guide from './components/guide/Guide';
import InspirationResellers from './components/inspiration-resellers/InspirationResellers';
import Footer from './components/footer/Footer';
import TopCarousel from './components/top-carousel/TopCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <TopCarousel />
      <ProductCategories />
      <Campaigns />
      <NewProducts />
      <CatalogInspiration />
      <PopularProducts />
      <Guide />
      <InspirationResellers />
      <Footer />
    </div>
  );
}

export default App;
