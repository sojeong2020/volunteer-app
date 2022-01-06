import React from 'react';
import { useState, useEffect} from 'react';
import { getSession ,putJoin} from '../api';
import { useParams} from 'react-router-dom';
import { Button, Card, ListGroup,Container,Row} from 'react-bootstrap';
import '../style/session.css';

const Session = ({t}) => {

  const {oppID}=useParams();
  console.log(oppID,"oppIDfromuseParam")

  const[sessions, setSessions]=useState([]);
  const[joinSession,setJoinsession]= useState([]);
  const [msg,setMsg]=useState("");


  useEffect(()=>{
    getSession(oppID).then((resultFromApi)=>{
    console.log("sessionFromAPi",resultFromApi)
    setSessions(resultFromApi)
    })           
    },[oppID])   
    
    
    const submitForm = (event)=>{
        event.preventDefault();

    const data= {
        success:true
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

    <h2>{msg}</h2>

        <ul>
            {
                sessions.map((session)=>{
                    return(
                        <li key={session.PLACEMENTSLOTID}>
                            <Row className="session-card"> 
                            <Card style={{width:'60rem'}}>
                            <Card.Body>
                            <Card.Title><strong>{t('session')}</strong></Card.Title>

                            <ListGroup variant="flush">
                            <ListGroup.Item><strong>{t('date')}</strong> {session.PLACEMENTSLOTDATE}</ListGroup.Item>
                            <ListGroup.Item><strong>{t('startat')}</strong> {session.PLACEMENTSLOTSTARTTIME}</ListGroup.Item>
                            <ListGroup.Item><strong>{t('hours')}</strong> {session.PLACEMENTSLOTHOURS}</ListGroup.Item>
                            <ListGroup.Item>
                            <form  onSubmit={submitForm}>
                            <Button 
                            type="submit"
                            onClick={(e)=>setJoinsession(session.PLACEMENTSLOTID)} 
                            >{t('join')}</Button>
                            </form>
                            </ListGroup.Item>
                            </ListGroup>

                            </Card.Body>
                            </Card>
                            </Row>
                        </li>
                    )
                })
            }
        </ul>
        
    </Container>
    </>
    );

    };
export default Session;