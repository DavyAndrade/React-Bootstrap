import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./Footer.css";

function Footer() {
    return (
        <Navbar expand="lg" className="mt-5 custom-footer">
            <Container>
                <Row className="w-100">
                    <Col md={6}>
                        <Navbar.Brand className="text-footer" href="https://www.kabum.com.br/?gclid=Cj0KCQjwn9CgBhDjARIsAD15h0DJUhkzD2Yq9IkZoIeIt8kGrMMLQBxlaU4aMMLeYgWnJF6Aj6v2MrYaAiB8EALw_wcB">KaBuM!</Navbar.Brand>
                    </Col>
                    <Col md={6} className="d-flex justify-content-md-end">
                        <Navbar.Text className="text-footer">
                            Desenvolvido por{" "}
                            <a href="https://github.com/DavyAndrade" className="text-footer link-footer">Davy.</a>
                        </Navbar.Text>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;
