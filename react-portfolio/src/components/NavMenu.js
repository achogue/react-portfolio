import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import './NavMenu.css';



const NavMenu = () => {
    
    return (
        <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" variant="light">
                <Container className="d-sm-inline-flex">
                   <Navbar.Brand id="app-brand" as={Link} to="/" className="d-flex">
                        <img src="/logo192.png" alt="Logo" />
                        <h5 className="fw-light">Anna's Portfolio</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle  className="mr-2" />
					<Navbar.Collapse className="flex-sm-row-reverse">
                        <Nav className="olg-nav flex-grow fw-light" navbar>
                                <Nav.Item>
                                    <Nav.Link as={Link} className="text-dark" to="/" title="Home">
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link 
										as={Link} 
										className="text-dark" 
										to="/projects" 
										title="Projects">
										Projects
									</Nav.Link>
                                </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
};
export default NavMenu;