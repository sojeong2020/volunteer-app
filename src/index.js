import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './i18n';
import { Suspense } from 'react';




ReactDOM.render(
  
  <React.Fragment>
    <Suspense fallback={(<div>Loading ...</div>)} >
    <Router>
    <App />
    </Router>
    </Suspense>
  </React.Fragment>,
  document.getElementById('root')
);

