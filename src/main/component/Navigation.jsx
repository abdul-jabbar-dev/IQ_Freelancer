import React, { useState } from 'react';
import { Container, Nav, Navbar,NavDropdown  } from 'react-bootstrap';
import './style.css'

const Navigation = () => {
    const [ navbar, setNavbar ]  = useState(false)

    const changeBackground = () =>{
        if( window.scrollY >= 50 ){
            setNavbar( true )
        }
        else{
            setNavbar( false )
        }
    };
    window.addEventListener('scroll', changeBackground );
    return (
        <section className='w-100 fixed naviagtion-section'>
            <Navbar className={ navbar ? `bg-light` : ``} expand="lg">
                <Container>
                    <Navbar.Brand href="#home"  >Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={ navbar ? `text-dark` : `text-white`}>Services </Nav.Link>
                        <Nav.Link href="#link" className={ navbar ? `text-dark` : `text-white`} >About Us</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" >Team </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Faq </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" >Testimonial </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" >Blog </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Services </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link" className={ navbar ? `text-dark` : `text-white`}>Contact us</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </section>
    );
};

export default Navigation;