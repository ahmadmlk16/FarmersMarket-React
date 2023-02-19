import React, { Component } from 'react';
import {products} from "../Data/Database";
import ProductListing from "./ProductListing";


export class ProductListings extends Component {
    render() {
        return(
            <div>
                <h1>Farmers Market</h1>
                {
                   products.map((product, index) => {
                        return <ProductListing product={product}/>
                    })
                }

            </div>
        )
    }
}
export default ProductListings;