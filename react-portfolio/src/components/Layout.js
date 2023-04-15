import * as React from 'react';
import Container from "react-bootstrap/Container";
import NavMenu from './NavMenu';
import Footer from './Footer';

export default props => (
    <React.Fragment>
        <NavMenu />
        <Container>
            {props.children}
            <Footer />
        </Container>
    </React.Fragment>
);
