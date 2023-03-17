import React from 'react';
import './Contador.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Contador() {
    return (
        <>

            <Navbar className='navbar-color2 contador-margin' expand="lg">
                <Container fluid>


                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >


                        <Navbar.Brand className='contador-text'>
                            EVENTO
                        </Navbar.Brand>

                        <Navbar.Brand className='contador-text contador-spacing'>
                            TERMINA EM: 00D 00:00:00
                        </Navbar.Brand>
                    </Nav>

                </Container>
            </Navbar>

        </>
    )
}

export default Contador