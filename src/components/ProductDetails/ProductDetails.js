
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
                        <Col><p  className={"Listing-Date"} style={{textAlign:"right", paddingTop:"0.65rem"}}>Listed: {thisProduct.listingDate}</p></Col>
                    </Row>
                    <Row style={{height:"16rem"}}>
                        <p className={"Description"}>{thisProduct.description}</p>
                    </Row>

                    <Row style={{textAlign:"left", }}>
                        <h4 className={"Contact-Info"}>Contact Info</h4>
                        <p className={"Contact-Name"}>Contact Name: {thisProduct.contactName}</p>
                        <p className={"Phone-Number"}>Phone Number: {thisProduct.phoneNumber}</p>
                        <p className={"Email"}>Email Address: {thisProduct.emailAddress}</p>
                        <p className={"Address"}>Address: {thisProduct.location}</p>
                    </Row>
                    <Row >

                    </Row>
                </Col>
            </Row>
        </Container>

    )
}
export default ProductDetails;