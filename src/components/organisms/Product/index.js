import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './styles.css';

const CardProduct = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <Col xs={12} md={3} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            {/* Contenu de la sidebar */}
            <div className="sidebar-links">
                <h4>Liens Rapides</h4>
                <ul>
                    <li>
                        <a href="/page1">Lien vers Page 1</a>
                    </li>
                    <li>
                        <a href="/page2">Lien vers Page 2</a>
                    </li>
                    <li>
                        <a href="/page3">Lien vers Page 3</a>
                    </li>
                </ul>
            </div>
        </Col>
    );
};

const Product = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const cards = Array.from({ length: 12 }, (_, index) => <CardProduct key={index} />);

    return (
        <Container fluid>
            <Row>
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <Col xs={12} md={9} className="custom-divider">
                    {/* Contenu principal */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '1rem', padding: '1rem' }}>
                        {cards}
                    </div>
                </Col>
                <Button
                    variant="secondary"
                    onClick={toggleSidebar}
                    className={`toggle-button d-md-none ${isSidebarOpen ? 'open' : ''}`}
                >
                    {isSidebarOpen ? 'Fermer' : 'Ouvrir'}
                </Button>
            </Row>
        </Container>
    );
};

export default Product;
