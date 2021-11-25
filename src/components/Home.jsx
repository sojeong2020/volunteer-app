import React from 'react';
import { getProfile, getSearch} from '../api';
import { useState, useEffect} from 'react';
import '../style/home.css';
import { Container, Row, Col, InputGroup, FormControl,Button } from 'react-bootstrap';
import { FcRating } from 'react-icons/fc';


const Home = () => {

const [search,setSearch]=useState("");
console.log(search,"searchTerm")    

const [result,setResult]=useState([]);
   console.log(result,"resultFromSearching")    
const[profile, setProfile]=useState([]);

    useEffect(()=>{
        getProfile().then((resultFromApi)=>{
            console.log("profileFromAPi",resultFromApi)
            setProfile(resultFromApi)
        }) 

    },[])

    const handleClick=(event)=>{
        event.preventDefault();

     getSearch(search).then((resultFromApi)=>{
         setResult(resultFromApi)
     })
    
    }

return (
    <Container fluid>
        <Row>
        <Col>
        <InputGroup className="search-bar">
        <FormControl
        placeholder="Search"
        onChange={(event)=>setSearch(event.target.value)}
        />
        <Button variant="outline-secondary" /* id="button-addon2" */ onClick={handleClick}>
        Search
        </Button>
        </InputGroup>
        </Col>
        </Row>

        <Row>
        <Col>
        <div className="home">

        <h2 className="name">Hello {profile.FirstName}</h2>
        <div className="user-info">
        <h2><FcRating /></h2>
        <p>{profile.BadgeRankNextText}</p>
        </div>

        <div className="user-info">
        <h2>{profile.VolLoggedHours}</h2>
        <p>Hours Logged</p>
        </div>

        <div className="user-info">
        <h2>{profile.ThumbsUp}</h2>
        <p>ThumbsUp</p>
        </div>  

        </div>
    </Col>
    </Row>

   {/*  <Row>
    <Col className="result">
    <h2>{result.NAME}</h2>
    <div className="description">
    <h3>{result.DESCRIPTION}</h3>
    </div>
    </Col>
    </Row> */}
    </Container>
    );
};

export default Home;