import React from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, NavDropdown } from 'react-bootstrap';

function NavbarTop() {

  return (
    <>


      {/* Navbar Superior */}

      <Navbar className='navbar-color navbar-padding navbar1-height' variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img src='https://logodownload.org/wp-content/uploads/2017/11/kabum-logo-2.png' className='logo-size' />
          </Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button className='search-button'>Search</Button>
          </Form>
        </Container>
      </Navbar>


      {/* Navbar Inferior */}

      <Navbar className='navbar-color2' expand="lg">
        <Container fluid>
          <NavDropdown title="Link" id="navbarScrollingDropdown" className='navbar2-position navbar-text'>
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              

              <Nav.Link href="#" className='navbar-text'>
                Link
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavbarTop;