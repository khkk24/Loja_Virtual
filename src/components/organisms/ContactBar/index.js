import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './styles.css';
import contactImage from '../../../images/architecture-city-building-tourism-wallpaper-preview.jpg';


const ContactBar = () => {
    return (
        <>
            <Container fluid className="contact-bar">
                <Row className="contact-row" style={{ height: '20vh' }}>
                    <Col xs={8} className="d-flex justify-content-end align-items-center">
                        <h1 className="contact-title">Contact Us</h1>
                    </Col>
                    <Col xs={4} className="d-none d-md-flex justify-content-end align-items-center">
                        <div style={{ width: '70px', height: '70px', overflow: 'hidden', borderRadius: '50%'}}>
                            <img
                                src={contactImage}
                                alt="image"
                                className="img-fluid flip-image"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="form-container">
                <Row>
                    <Col className="d-none d-md-block">
                        <div style={{ border: '2px solid white', padding: '10px' }}>
                            <img
                                src={contactImage}
                                alt="Contact"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
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
