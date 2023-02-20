import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from 'react';

export class NavBar extends Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <img src={process.env.PUBLIC_URL + "img/logo.png"} width={200} style={{paddingLeft: "40px"}}/>

                <Nav className="me-auto" style={{paddingLeft: "40px"}}>
                    <Nav.Link href="/listings">Listings</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>

                <Nav style={{paddingRight: "40px"}}>
                    <Button variant="dark">
                        <Nav.Link href="/newlisting" >New Listing</Nav.Link>
                    </Button>
                </Nav>

            </Navbar>
        )
    }
}
export default NavBar;