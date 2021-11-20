import './App.css';
import {Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Opportunities from './components/Opportunities';
import Opportunity from './components/Opportunity';
import Documents from './components/Documents';
import Resources from './components/Resources';



function App() {

  return (
    <div className="App">
  <Sidebar />

  <Routes>
 <Route path='/home' element={<Home/>} />
 <Route path='/profile' element={<Profile/>} />
 <Route path='/search' element={<Search/>} />
 <Route path="/opportunities" element={<Opportunities/>}/>
 <Route path="/opportunity" element={<Opportunity/>}/>
 <Route path="/documents" element={<Documents/>}/>
 <Route path="/resources" element={<Resources/>}/>
</Routes>   
    
         


      
      
    </div>
  );
}

export default App;
