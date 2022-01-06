import React from 'react';
import picture from '../assets/movie.jpg';
import tasktest from '../assets/tasktest.docx';
import tesDoc from '../assets/tesDoc.pdf';
import movie from '../assets/movie.jpg';
import nasa from '../img/nasa.jpg';
import tea from '../img/tea.jpg';
import { Card, Container, Row, Col} from 'react-bootstrap';


const Resources = ({t}) => {
    return (
    <>
    <Container fluid>

    <Row>

    <h1>{t('resources')}</h1>
    <Col sm={12} md={12} lg={4}>
    <Card>
    <Card.Img variant="top" src={movie} />
    <Card.Body>
    <Card.Title>{t('handbook')}</Card.Title>
    <Card.Link href={picture} download="movie.jpg">{t('download')}</Card.Link>
    </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={12} lg={4}>
    <Card>
    <Card.Img variant="top" src={nasa} />
    <Card.Body>
    <Card.Title>{t('news')}</Card.Title>
    <Card.Link href={tasktest} download="tasktest.docx">{t('download')}</Card.Link>
    </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={12} lg={4}>
    <Card>
    <Card.Img variant="top" src={tea} />
    <Card.Body>
    <Card.Title>{t('documents')}</Card.Title>
    <Card.Link href={tesDoc} download="tesDoc.pdf">{t('download')}</Card.Link>
    </Card.Body>
    </Card>
    </Col>

    </Row>

    </Container>
    </>
    );
};

export default Resources;