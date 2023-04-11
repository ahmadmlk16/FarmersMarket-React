
import {useParams} from "react-router-dom";
import {products} from "../Data/Database";
import {Card, Col, Container, Image, Row} from "react-bootstrap";


function ProductDetails() {
    let {listingsId} = useParams()
    let thisProduct = products.find(prod => prod.productId === listingsId)

    return (

        <Container style={{margin:"5rem", marginLeft:"auto",marginRight:"auto"}}>
            <Row>
                <Col >
                    <Image src={ process.env.PUBLIC_URL + "/" +thisProduct.images} rounded={true} style = {{width:"50rem", height: "30rem"}}>

                    </Image>
                </Col>
                <Col style={{textAlign:"left", }} >
                    <Row>
                        <Col xs={8}><h3 >{thisProduct.title + "(" + thisProduct.price + ")" } </h3></Col>
                        <Col><p style={{textAlign:"right", paddingTop:"0.65rem"}}>Listed: {thisProduct.listingDate}</p></Col>
                    </Row>
                    <Row style={{height:"16rem"}}>
                        <p>{thisProduct.description}</p>
                    </Row>

                    <Row style={{textAlign:"left", }}>
                        <h4>Contact Info</h4>
                        <p>Contact Name: {thisProduct.contactName}</p>
                        <p>Phone Number: {thisProduct.phoneNumber}</p>
                        <p>Email Address: {thisProduct.emailAddress}</p>
                        <p>Address: {thisProduct.location}</p>
                    </Row>
                    <Row >

                    </Row>
                </Col>
            </Row>
        </Container>

    )
}
export default ProductDetails;