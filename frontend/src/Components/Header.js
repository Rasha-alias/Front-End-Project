import React from "react";
import "./ComponentsStyle.css";
import logo from "../Images/logo.png";

import {Container, Navbar, Row, Col }from 'react-bootstrap/';

/**
 * Class representing a Header (Navbar).
 * @extends React component
 * @return Nav as components (Brand) that links to its page.
 */

const Header = () => {

  return (
    
    <div>

      <Navbar collapseOnSelect expand="sm" variant="light" className="navbar-border">

        <Container>
          {/* <Row>*/}
              {/* <Col>*/}
                    <Navbar.Brand href="/" className="brand ">  
                        <img src={logo} alt = "logo" className="logo-style"/> 
                    </Navbar.Brand>
              {/* </Col>*/}
          {/* </Row>*/}
        </Container>

      </Navbar>

    </div>
  )
}

export default Header;

