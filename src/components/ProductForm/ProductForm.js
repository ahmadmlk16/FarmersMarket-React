import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col} from "react-bootstrap";

export class ProductForm extends Component {
    render() {
        return(
            <div style = {{paddingLeft:"35%", paddingRight:"35%"}} >
                <h1>Add Product Detail</h1>
                <Form>
                    <div>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Enter title of your listing" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter product description" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="Price" placeholder="Cost per pound" />
                    </Form.Group>
                    {/*<Button variant="outline-info" type="submit">*/}
                    {/*    Add Image*/}
                    {/*</Button>*/}

                    <Form.Group className="mb-3" controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="Location" placeholder="City, State" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="Number" placeholder="Contact Information" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="Email" placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control type="Name" placeholder="Enter Contact Name" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Add Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Add Product
                    </Button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default ProductForm;