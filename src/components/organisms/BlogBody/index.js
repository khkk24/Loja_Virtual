import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//import './styles.css';
import contactImage from '../../../images/architecture-city-building-tourism-wallpaper-preview.jpg';


const BlogBody = () => {
    return (
        <>
            <Container fluid className="contact-bar">
                <Row className="contact-row" style={{ height: '20vh' }}>
                    <Col xs={8} className="d-flex justify-content-start align-items-center">
                        <h1 className="contact-title"> LATEST BLOG </h1>
                    </Col>
                    <Col xs={4} className="d-none d-md-flex justify-content-end align-items-center">
                        <div style={{ width: '70px', height: '70px', overflow: 'hidden', borderRadius: '50%' }}>
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

                    </Col>
                </Row>
            </Container>
            <Container fluid className="form-container">
                <Row>
                   
                    <Col>

                    </Col>
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
                </Row>
            </Container>
        </>
    )
}

export default BlogBody