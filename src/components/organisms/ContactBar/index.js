import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './styles.css';

const ContactBar = () => {
    return (
        <>
            <Container fluid className="contact-bar">
                <Row className="contact-row" style={{ height: '20vh' }}>
                    <Col xs={8} className="d-flex justify-content-end align-items-center">
                        <h1 className="contact-title">Contact Us</h1>
                    </Col>
                    <Col xs={4} className="d-none d-md-flex justify-content-end align-items-center">
                        <img src="" alt="image" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="form-container">
                <Row>
                    <Col className="d-none d-md-block">
                        <img src="" alt="Contact" className="img-fluid" />
                    </Col>
                    <Col>
                        <Form className="mt-4">
                            <Form.Group controlId="formBasicName" className="mb-3">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone" className="mb-3">
                                <Form.Control type="tel" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMessage" className="mb-3">
                                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactBar;
