import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
//import Search from './components/Search';
import Opportunities from './components/Opportunities';
import Experience from './components/Experience';
import Session from './components/Session';
import Documents from './components/Documents';
import Resources from './components/Resources';
import { Col, Row } from 'react-bootstrap';

function App() {

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
          <Header />
        </Col>
      </Row>
      
      <div style={styles.contentDiv}>
        <Sidebar></Sidebar>

      <div style={styles.contentMargin}>

     <Routes>
      <Route exact path="/profile" element={<Profile/>} />
      <Route exact path="/"  element={<Home/>} />
      {/* <Route exact path="/search" element={<Search />} />  */}
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
          <Footer></Footer>
        </Col>
      </Row>
    </> 
  );
}



export default App;
