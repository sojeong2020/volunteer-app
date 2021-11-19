import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Opportunity from './components/Opportunity';
import Documents from './components/Documents';
import Opportunities from './components/Opportunities';
 


function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <h1>task!!</h1>
      <Opportunities />
      <Opportunity />
      <Documents />
    </div>
  );
}

export default App;
