
import React, { Component } from 'react';
import { Image} from "react-bootstrap";
export class PageNotFound extends Component {
    render() {
        return ( <
                div >
                <h1 > Whoooooops!!!!! Page Not Found</h1>
                <h3 > Looks like the page you are looking
                for went on a holiday < /h3>{" "} <
                p > Try our homepage instead < /p>
                <Image src = { process.env.PUBLIC_URL + "/PNF.jpg" } alt = "not found" fluid />
            </div>
        );
    }
}
export default PageNotFound;

