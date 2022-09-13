// import './App.css';
import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from './pages/landing/LandingPage';
// import button from "elements"
function App() {
  // const Say = () => {
  //   return <div>Hallo</div>
  // }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
