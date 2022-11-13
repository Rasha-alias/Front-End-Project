import React from "react";
import "./ComponentsStyle.css";
import logo from "../Images/logo.png";
import {Container, Navbar }from 'react-bootstrap/';

/**
 * Class representing a Header (Navbar).
 * @extends React component
 * @return Nav as components (Brand) that links to its page.
 */

const Header = () => {

  return (
    
    <div>

      <Navbar collapseOnSelect expand="sm" variant="light" className="navbar-border">

        <Container className="navbar-container">
          
                    <Navbar.Brand href="/" className="brand ">  
                        <img src={logo} alt = "logo" className="logo-style"/> 
                    </Navbar.Brand>
            
        </Container>

      </Navbar>

    </div>
  )
}

export default Header;

