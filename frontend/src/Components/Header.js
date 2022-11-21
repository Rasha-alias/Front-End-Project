import React from "react";
import {Container, Navbar }from 'react-bootstrap/';
import "./ComponentsStyle.css";
import logo from "../Images/logo.png";


/*
  * A function (component) that representing a Header.
  * @return (Brand) logo (Super Saver) that links to its page.
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

