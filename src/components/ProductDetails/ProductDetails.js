import React, {Component, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {products} from "../Data/Database";


function ProductDetails() {
    let {listingsId} = useParams()
    let thisProduct = products.find(prod => prod.productId === listingsId)

    return (
        <div>
            <h1>{thisProduct.title}</h1>
            <p>Price: {thisProduct.price}</p>

            <p>{thisProduct.description}</p>
        </div>
    )
}
export default ProductDetails;