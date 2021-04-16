import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './report.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Report from './components/Report';
import LoginSignup from './components/LoginSignup';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact><Home /></Route>
      <Route path="/Report"><Report /></Route>
      <Route path="/LoginSignup"><LoginSignup /></Route>
    </Router>
  );
}

export default App;
