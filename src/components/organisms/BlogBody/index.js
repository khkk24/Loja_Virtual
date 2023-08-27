import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './styles.css';
import contactImage from '../../../images/architecture-city-building-tourism-wallpaper-preview.jpg';


const BlogBody = () => {
    return (
        <>
            <Row>
                <Col xs={3} lg={2} className="first-col d-flex align-items-end justify-content-center">
                    <div style={{ width: '70px', height: '70px', overflow: 'hidden', borderRadius: '50%', backgroundColor: 'red' }}>
                        <img
                            src={contactImage}
                            alt="image"
                            className="img-fluid flip-image"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </Col>
            <Col xs={9} lg={10} className="second-col">
            
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

            <Container fluid className="">
                <Row>
                            <Col md={5} className=" d-md-block ">
                        <div style={{ border: '2px solid white', padding: '10px' }}>
                            <img
                                src={contactImage}
                                alt="Contact"
                                className="img-fluid"
                                // style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </Col>
                    <Col className="d-flex flex-column " >
                        <div className="flex-column">

                            <h1 className="responsive-title">
                                Titulo
                            </h1>
                                    <p className="responsive-text" style={{
                                        // whiteSpace: 'nowrap'
                                    }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                            </p>
                            <Button className="custom-button">
                                Read More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="">
                <Row>

                    <Col  className="d-flex flex-column ">
                        <div className="flex-column">
                            <h1 className="responsive-title">
                                Titulo
                            </h1>
                            <p className="responsive-text" style={{
                                        // whiteSpace: 'nowrap'
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                            </p>
                        </div>
                        <Button className="custom-button1">
                            Read More
                        </Button>
                    
                    </Col>
                    <Col md={5} className="d-md-block">
                        <div style={{ border: '2px solid white', padding: '10px' }}>
                            <img
                                src={contactImage}
                                alt="Contact"
                                className="img-fluid"
                                // style={{width:'100%', height: 'auto' ,}}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
                </Col>
            </Row>
        </>
    )
}

export default BlogBody