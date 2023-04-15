import React, { Component } from 'react';
import Container from "react-bootstrap/Container";

export class NotFound extends Component {
    displayName = NotFound.name

    render() {
        return (
            <Container>

                <div className="row">

                    <div className="col-md-12">
                        <h4 style={{ color: "#ff4d4d" }}><em>Hm... I couldn&#39;t find that resource, have a nice day!</em>&#9786;</h4>
                    </div>
                </div>
            </Container>
        );
    }
}
export default NotFound;