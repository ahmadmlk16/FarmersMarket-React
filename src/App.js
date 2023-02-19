import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListings from "./components/ProductListings/ProductListings";
import {products} from "./components/Data/Database";

function App() {
  return (
    <div className="App">
      <ProductListings listings = {products}/>
    </div>
  );
}



export default App;
