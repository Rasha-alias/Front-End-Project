import React from 'react'
import { useState} from "react";
import {Container, Row, Col, Button, InputGroup, FormControl} from "react-bootstrap";
import "../Components/ComponentsStyle.css";
import {ImSearch} from "react-icons/im";
import {Link} from "react-router-dom";



const SearchBar = () => {

    const [userInput, setUserInput] = useState(" ");

  return (
  <>

    <Container>
         <Row>
            <Col xs={2} sm={1}></Col>
            <Col xs={8} sm={10}>

                <InputGroup className="search-bar ">

                    <FormControl
                        name="userInput"    
                        //**set the value that the user entered in the input state */
                        onChange={(e)=>setUserInput(e.target.value)}
                        placeholder="Sök för Produkt, affär, Stad" 
                        required
                    />
                    

                  <Link to={`/SearchResult/${userInput}`}> 
                    <Button variant="primary" id="button-addon2">
                        <ImSearch/>
                    </Button>
                    </Link>
              
                        
                </InputGroup> 

            </Col>
            <Col xs={2} sm={1}></Col>
        </Row>
    </Container>        

  </>
  )

}
export default SearchBar