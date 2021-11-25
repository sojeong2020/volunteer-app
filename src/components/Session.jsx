import React from 'react';
import { useState, useEffect} from 'react';
import { getSession ,putJoin} from '../api';
import { useParams} from 'react-router-dom';
import { Button, Card, ListGroup,Container,Row} from 'react-bootstrap';
import '../style/session.css';

const Session = () => {

  const {oppID}=useParams();
  console.log(oppID,"oppIDfromuseParam")

  const[session, setSession]=useState([]);
  const[joinSession,setJoinsession]= useState([]);
  const [msg,setMsg]=useState("");


  useEffect(()=>{
    getSession(oppID).then((resultFromApi)=>{
    console.log("sessionFromAPi",resultFromApi)
    setSession(resultFromApi)
    })           
    },[oppID])   
    
    
    const submitForm = (event)=>{
        event.preventDefault();

        const data= {
            success:false
        }

        putJoin(oppID,joinSession,data)
        .then((resultFromApi)=>{
            console.log(resultFromApi)
            if(resultFromApi.success===true){
                setMsg("THANK YOU FOR JOINING THE SESSION!")
                
            }else{
                setMsg("FULL OR ALREADY JOINED!")

            }
            
        })
    }
    

    return (
    <>
    <Container fluid className="session" >
    <Row>
    <Card style={{ width: '30rem' }}>
    <Card.Body>
    <Card.Title><strong>Session</strong></Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item><strong>Date</strong> {session.PLACEMENTSLOTDATE}</ListGroup.Item>
    <ListGroup.Item><strong>Start at</strong> {session.PLACEMENTSLOTSTARTTIME}</ListGroup.Item>
    <ListGroup.Item><strong>Hours</strong> {session.PLACEMENTSLOTHOURS}</ListGroup.Item>
    </ListGroup>
    </Card.Body>
    </Card>
    </Row>

    <Row className="join">
    <form onSubmit={submitForm}>
        <Button 
            type="submit"
            onClick={(e)=>setJoinsession(session.PLACEMENTSLOTID)} 
            >Join</Button>
            </form>
    </Row>
    <Row className="msg">
        <h2 >{msg}</h2>
    </Row>
    </Container>
    </>
    );

    };
export default Session;