import React from 'react';
import { useState,useEffect } from 'react';
import { getOpportunityFirst,
        getOpportunitySecond,
        getOpportunityThird  }  from '../api';
import football1 from '../img/football1.jpg';
import football2 from '../img/football2.jpg';
import swim from '../img/swim.jpg';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button} from 'react-bootstrap';
import '../style/opps.css';

const Opportunity = ({t}) => {

   const[opportunityFirst, setOpportunityFirst]=useState([]);
   const[opportunitySecond, setOpportunitySecond]=useState([]);
   const[opportunityThird, setOpportunityThird]=useState([]); 
  
    
   
    useEffect(()=>{
        getOpportunityFirst().then((resultFromApi)=>{
            console.log("opportunityFirst",resultFromApi)
            setOpportunityFirst(resultFromApi)
            })
        },[]) 
    useEffect(()=>{
            getOpportunitySecond().then((resultFromApi)=>{
                console.log("opportunitySecond",resultFromApi)
                setOpportunitySecond(resultFromApi)
                })
            },[]) 
    useEffect(()=>{
            getOpportunityThird().then((resultFromApi)=>{
                console.log("opportunityThird",resultFromApi)
                setOpportunityThird(resultFromApi)
                })
            },[])            
       
     

    return (
        <>
    <Container fluid className="opps">
    <Row>

    <Col sm={12} md={12} lg={4}>
    <Card className="card">
    <Card.Img variant="top" src={football1} />
    <Card.Body>
    <Card.Title>{opportunityFirst.NAME}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>{t('startdate')} {opportunityFirst.STARTDATE}</ListGroupItem>
    <ListGroupItem>{t('enddate')} {opportunityFirst.ENDDATE}</ListGroupItem>
    </ListGroup>
    <Card.Body className="button">
    <Card.Link href={`/session/${opportunityFirst.oppID}`}><Button className="button-group" variant="outline-success">{t('session')}</Button></Card.Link> <br />
    <Card.Link href={`/documents/${opportunityFirst.oppID}`}><Button className="button-group" variant="outline-warning">{t('uploaddoc')}</Button></Card.Link><br />
    <Card.Link href={`/experience/${opportunityFirst.oppID}`}><Button className="button-group" variant="outline-primary">{t('updateexperience')}</Button></Card.Link>
    </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={12} lg={4}>
    <Card className="card">
    <Card.Img variant="top" src={football2} />
    <Card.Body>
    <Card.Title>{opportunitySecond.NAME}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>{t('startdate')} {opportunitySecond.STARTDATE}</ListGroupItem>
    <ListGroupItem>{t('enddate')} {opportunitySecond.ENDDATE}</ListGroupItem>
    </ListGroup>
    <Card.Body className="button">
    <Card.Link href={`/session/${opportunitySecond.oppID}`}><Button className="button-group" variant="outline-success">{t('session')}</Button></Card.Link><br />
    <Card.Link href={`/documents/${opportunitySecond.oppID}`}><Button className="button-group" variant="outline-warning">{t('uploaddoc')}</Button></Card.Link><br />
    <Card.Link href={`/experience/${opportunitySecond.oppID}`}><Button className="button-group" variant="outline-primary">{t('updateexperience')}</Button></Card.Link>
    </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={12} lg={4}>
    <Card className="card">
    <Card.Img variant="top" src={swim} />
    <Card.Body>
    <Card.Title>{opportunityThird.NAME}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>{t('startdate')} {opportunityThird.STARTDATE}</ListGroupItem>
    <ListGroupItem>{t('enddate')}{opportunityThird.ENDDATE}</ListGroupItem>
    </ListGroup>
    <Card.Body className="button">
    <Card.Link href={`/session/${opportunityThird.oppID}`}><Button className="button-group" variant="outline-success">{t('session')}</Button></Card.Link><br />
    <Card.Link href={`/documents/${opportunityThird.oppID}`}><Button className="button-group" variant="outline-warning">{t('uploaddoc')}</Button></Card.Link><br />
    <Card.Link href={`/experience/${opportunityThird.oppID}`}><Button className="button-group" variant="outline-primary">{t('updateexperience')}</Button></Card.Link>
    </Card.Body>
    </Card>
    </Col>

    </Row>
    </Container>      
    </>
    );
};

export default Opportunity;