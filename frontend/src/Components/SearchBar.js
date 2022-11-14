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

    <Container className="search-bar-position">
         <Row>
            <Col xs={1} sm={2}></Col>

            <Col xs={10} sm={8} className="search-bar-col">

                <InputGroup className="search-bar">

                    <FormControl
                        name="userInput"    
                        //**set the value that the user entered in the input state */
                        onChange={(e)=>setUserInput(e.target.value)}
                        placeholder="Sök för Produkt, affär, Stad" 
                        required
                        className="placeholder-text"
                    />
                  
                    <Button  aria-label='sök' style={{backgroundColor:"white", border:"1px solid #ced4da"}}>
                    <Link to={`/SearchResult/${userInput}`} style={{color:"black"}} > <ImSearch/> </Link>
                    </Button>            
                        
                </InputGroup> 

            </Col>

            <Col xs={1} sm={2}></Col>
        </Row>
    </Container>        

  </>
  )

}
export default SearchBar