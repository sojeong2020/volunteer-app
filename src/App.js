import './App.css';
import {Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Opportunities from './components/Opportunities';
import Experience from './components/Experience';
import Session from './components/Session';
import Documents from './components/Documents';
import Resources from './components/Resources';
import { Col, Row ,Button} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {useState} from 'react';


function App() {

  const { t, i18n } = useTranslation();

  const[lang,setLang]=useState("");
  console.log(lang,"lang in App")

  function handleClick(lang){

    setLang(lang)

    i18n.changeLanguage(lang);
    
}
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>  
      <Row>
        <Col>
          <div className="header">
            <div className="lan-button">

            <Button className="lan-button-en" 
            variant="outline-danger"
            onClick={()=>handleClick('en')}
            >English</Button>

            <Button variant="outline-info"
            onClick={()=>handleClick('we')}
            >Welsh</Button>

          </div>
        </div> 

        </Col>
      </Row>
      
    <div style={styles.contentDiv}>
        <Sidebar t={t} i18n={i18n} />
    <div style={styles.contentMargin}>
     <Routes>
      
      <Route exact path="/" element={<Home t={t} lang={lang}/>} />
      <Route exact path="/opportunities" element={<Opportunities/>}/>
      <Route exact path="/experience/:oppID" element={<Experience/>}/>
      <Route exact path="/session/:oppID" element={<Session/>}/> 
      <Route exact path="/documents/:oppID" element={<Documents/>}/>
      <Route exacts path="/resources" element={<Resources/>}/>
      </Routes>  
    </div>
    </div>
      
      <Row>
        <Col>
          <Footer t={t} i18n={i18n}/>
        </Col>
      </Row>
    </> 
  );
}



export default App;
