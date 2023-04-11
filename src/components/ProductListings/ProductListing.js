import React, { Component } from 'react';
import button from 'bootstrap'
import {Card, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export class ProductListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <Link to={`/listings/${this.props.product.productId}`} style={{textDecoration:"none"}}>
            <Card style={{ width: '18rem',height:"18rem", margin:"1rem"}}>
                <Card.Img variant="top" src={this.props.product.images} style={{ width: 'auto',height:"10rem"}}/>
                <Card.Body>
                    <div style={{display:"flex"}}>
                        <p style={{paddingRight:"1rem"}}>{this.props.product.title}</p>
                        <p>{this.props.product.price}</p>
                    </div>
                    <Card.Text>
                        {this.props.product.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>

        )
    }
}
export default ProductListing;