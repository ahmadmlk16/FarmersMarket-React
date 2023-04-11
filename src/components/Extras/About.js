import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";



const About = () => {

    return (<section id="about">
        <Container>
            <Row>
                <Col md={20}>
                    <h2 className="head22"> About Us < /h2>{" "}

                    <Image src={process.env.PUBLIC_URL + "/logo.jpg"}alt="About Us" fluid />

                    <p> {" "}
                        FARMERS MARKET is a one - stop - shop
                        for all your vegetable needs.We source fresh, organic vegetables directly from farmers and
                        deliver them straight to your doorstep.Our mission is to make healthy eating convenient and
                        affordable
                        for everyone. {" "} </p>{" "}
                    <p> {" "}
                        At FARMERS MARKET, we believe in sustainability and ethical farming practices.We work closely
                        with farmers to ensure that they get a fair price
                        for their produce and that the environment is not harmed in the process. {" "} </p>{" "}
                    <p> To reach us do call us on our helpline number < /p>{" "} < /Col> {" "}
                <h6 className="head66"> Contact Number: (111) 222 - 3333 </h6>
                <Col md={20}>

            </Col>{" "}
            </Row> {" "}
        </Container>{" "}
    </section>
);
};

export default About;