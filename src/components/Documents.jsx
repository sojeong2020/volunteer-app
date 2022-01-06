import React, { useState} from 'react';
import {postDocuments} from '../api';
import {useParams} from 'react-router-dom';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import '../style/doc.css'

const Documents = ({t}) => {
    const {oppID}=useParams();
    console.log(oppID,"OPPIDfromDocuments")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFile, setSelectedFile] =useState();
    const [msg,setMsg] =useState("");

     
    const submitForm = (event) => {
        event.preventDefault();
    
        const dataArray = new FormData();
        dataArray.append("Name", name);
        dataArray.append("Description", description);
        dataArray.append("selectedFile", selectedFile);

        postDocuments(oppID,dataArray)
        setMsg("File has been successfully uploaded!!")

    };

 
    
 return (
        <>
        <Container fluid className="doc-form" >
        <h2>{t('Qualifications')}</h2>
        <Row className="form-row">
        <Col>
        <Form onSubmit={submitForm}>

        <Form.Group >
        <Form.Label>{t('name')}</Form.Label>
        <Form.Control type="text" placeholder={t('name')} required onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group >
        <Form.Label>{t('description')}</Form.Label>
        <Form.Control type="text" placeholder={t('description')} required onChange={(e)=>setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group >
        <Form.Label>{t('file')}</Form.Label>
        <Form.Control type="file" required onChange={(e)=>setSelectedFile(e.target.files)} />
        </Form.Group>

        <Button className="button" type="submit" >{t('upload')}</Button>

        </Form>
        </Col>
        </Row>
        <h2 className="msg">{msg}</h2>

        </Container>     
        </>
    );
};

export default Documents;