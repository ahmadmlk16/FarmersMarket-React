import React, { Component } from 'react';
import button from 'bootstrap'

export class ProductListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div>
                <h3>{this.props.product.title}</h3>
                <img src={process.env.PUBLIC_URL + this.props.product.images}/>
                <p>Blah Blah Blah</p>
            </div>
        )
    }
}
export default ProductListing;