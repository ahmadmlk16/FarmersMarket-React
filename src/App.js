import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListings from "./components/ProductListings/ProductListings";
import {products} from "./components/Data/Database";
import ProductForm from "./components/ProductForm/ProductForm";

function App() {
  return (
    <div className="App">
      <ProductForm/>
    </div>
  );
}



export default App;
