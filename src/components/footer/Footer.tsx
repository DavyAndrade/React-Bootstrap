import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./Footer.css"; 

function Footer() {
  return (
    <Navbar expand="lg" className="mt-5 custom-footer"> {/* Adiciona a classe "custom-footer" */}
      <Container>
        <Row className="w-100">
          <Col md={6} className="mb-3 mb-md-0">
            <Navbar.Brand href="#">Meu Site</Navbar.Brand>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end">
            <Navbar.Text>
              Desenvolvido por{" "}
              <a href="https://seusite.com.br">Seu Nome</a>
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
