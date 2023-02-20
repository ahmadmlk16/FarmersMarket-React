import React, { Component } from 'react';
import {products} from "../Data/Database";
import ProductListing from "./ProductListing";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export class ProductListings extends Component {
    render() {
        return(
            <div>
                <Form className="d-flex" style={{ paddingLeft:"20rem",paddingRight:"20rem", paddingTop:"2rem"}}>
                    <Form.Control
                        type="search"
                        placeholder="search farmers market"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            <div style ={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {
                   products.map((product, index) => {
                        return <ProductListing product={product}/>
                    })
                }

            </div>
            </div>
        )
    }
}
export default ProductListings;