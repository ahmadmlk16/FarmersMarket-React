import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListings from "./components/ProductListings/ProductListings";

import React, {Component} from "react";
import NavBar from "./components/Navbar/NavBar";
import ProductForm from "./components/ProductForm/ProductForm";
import {
    BrowserRouter as Router,
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import About from "./components/Extras/About";
import PageNotFound from "./components/Extras/PageNotFound";

export class App extends Component {


    render() {
        return (
            <div className="App">

                <NavBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<PageNotFound/>}/>
                        <Route path="/" element={<ProductListings/>}/>
                        <Route path="/home" element={<ProductListings/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/newlisting" element={<ProductForm/>}/>

                    </Routes>
                </BrowserRouter>
            </div>
        );
    }


}






export default App;
