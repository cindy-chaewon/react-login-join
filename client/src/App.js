import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'



function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">About</Link>
          </li>
          <li>
            <Link to="/register">Users</Link>
          </li>
        </ul>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>

      </Routes>
      </BrowserRouter>
      </div>
  </Router>

  );
}



export default App;







