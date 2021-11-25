import React from 'react';
import { getProfile, getSearch} from '../api';
import { useState, useEffect} from 'react';
import '../style/home.css';
import { Container, Row, Col, InputGroup, FormControl,Button } from 'react-bootstrap';
import { FcRating } from 'react-icons/fc';


const Home = ({t, lang}) => {
        console.log(lang,"lang in home!!!!")

    const [search,setSearch]=useState("");
    const [result,setResult]=useState([]);
    const [profile, setProfile]=useState([]);

    console.log(result,"result in Home")

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
        placeholder="football / swim / club "
        onChange={(event)=>setSearch(event.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleClick}>
        {t('search')}
        </Button>
        </InputGroup>
        </Col>
        </Row>

        <Row>
        <Col>
        <div className="home">

        <h2 className="name">{t('hello')} {profile.FirstName}</h2>
        <div className="user-info">
        <h2><FcRating /></h2>
        <p>{profile.BadgeRankNextText}</p>
        </div>

        <div className="user-info">
        <h2>{profile.VolLoggedHours}</h2>
        <p>{t('hourslogged')}</p>
        </div>

        <div className="user-info">
        <h2>{profile.ThumbsUp}</h2>
        <p>{t('thumbsup')}</p>
        </div>  

        </div>
    </Col>
    </Row>

    <Row>
    <Col className="result">
    <h2>{lang==="en" ? result.NAME: result.NAMEALTLANG }</h2>
    <div className="description">
    <h3>{lang==="en" ? result.DESCRIPTION: result.DESCRIPTIONALTLNG}</h3>
    </div>
    </Col>
    </Row> 
    </Container>
    );
};

export default Home;