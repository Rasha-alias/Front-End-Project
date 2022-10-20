import React from "react";
import "./App.css";


import HomePage from "./Pages/HomePage";
import logo from "./Images/logo.png";

import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";
import {Container, Navbar }from 'react-bootstrap/';

 
/**
 * Class representing a Header (Navbar).
 * @extends React component
 * @return Nav as components (Brand) that links to its page.
 */

class Header extends React.Component {

render() {
 
return (

<Router>

  <div>
      <Navbar collapseOnSelect expand="sm" variant="light" className="navbar-border">

          <Container>
            <Navbar.Brand href="#home" className="brand ">  
              <Link className="nav-link" to ="/"> <img src={logo} alt = "logo" className="logo-style"/></Link>
            </Navbar.Brand>
        </Container>

      </Navbar>

     
   </div>
 </Router>

);
}
}

export default Header;