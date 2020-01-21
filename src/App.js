import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Users from './Users';
import Main from './Main';
import UserDetails from './UserDetails';


function App() {
  return (
    <Router>
      <div className='body'>   
        <Route exact path="/" component={Main} />
        
        <Route exact path="/user/" component={Users} />
        <Route path="/user/:Id" component={Details} />
      </div>
    </Router>
  );
}
export default App;
