import React from 'react';
import { Container, Nav, Navbar,NavDropdown  } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Services </Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Team </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Faq </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Testimonial </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Blog </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Services </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact us</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Navigation;