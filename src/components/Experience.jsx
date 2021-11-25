import React from 'react';
import {updateExperience} from '../api';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import '../style/experience.css';
import {Form,Button, Container,Row,Col} from 'react-bootstrap';


const Experience = () => {

    const {oppID}= useParams();

    const [update, setUpdate]=useState([]);
    const [msg,setMsg] =useState("");


    const submitForm = (event)=>{
        event.preventDefault();

        const data= {experience: update}

        updateExperience(oppID, data)
        .then((resultFromApi)=>{
            console.log(resultFromApi)
            if(resultFromApi.status===200){
                setMsg("Successfully Updated!!")
            }else {
                setMsg("Something went wrong!")
            }
        })
       
    }



    return (
        <div>
        <Container fluid className="form" >
            <h1>Update user experience</h1>
            <Row className="experience-row">
                <Col>
            <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control placeholder="experience" required as="textarea" rows={6} onChange={(e)=>setUpdate(e.target.value)} />
            </Form.Group>
            <Button className="button" type="submit">update</Button>
            </Form>
           
          </Col>
          </Row> 
          <h2 className="msg">{msg}</h2> 
        </Container>
        </div>
    );
};

export default Experience;