import React from 'react'
import { useState, useEffect } from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./ComponentsStyle.css";
import Video from "../Components/Video"
import Icons from "../Components/Icons";
import SearchBar from '../Components/SearchBar';


/*
  * A function (component) that representing all Get-opration for Categories.
  * @return components (ReadStudentsData)  which they are called in this component.
  */

const Categories = () => {
  
    /** URL for the port with categories and save it in a varaible  */
    const categories_URL = "http://localhost:5000/categories";

    /** set Varible (categories) the initial state to an empty array */
    const [categories, setCategories] = useState([]);


    /////////////////////////////////////////////Get Students Data///////////////////////////////////////////

/**
     * An async function to get the categories Data from MongoDB 
     * @return caregories data from 
    */
 const getCategoriesData = async () => {

    /**waiting for the categories URL response */
    const response = await fetch(categories_URL);

    /**  wating for json data response and convert it to JS objects*/
    const categoriesData = await response.json();

    // update the state by setting categories data in categories varible
    setCategories(categoriesData);
    };

    /** The functon getCategoriesData Runs only on the first render */
    useEffect(() => {
    getCategoriesData();
    }, []);  


    return (
    <>
        <Icons/>
        <SearchBar/>

        <Container className="body-container">
            <Row>
                <Col>
                    <div className="flex-container">
                        { categories && categories.map((category) => (
                         
                            <Link to ={`/Products/${category._id}`} className="category-link" key={category._id}> 
                            
                                <Card className="card-style" >
                                    <Card.Img className="card-image" variant="top" src={category.image}/>
                                
                                    <Card.Body className="card-body">
                                        <Card.Title className="card-title">{category.name} </Card.Title>
                                    </Card.Body>
                            
                                </Card>
                                
                            </Link>
                                                   
                            ))
                        }
                    </div>
                </Col>
            </Row>

            <Row>
                <Col >
               <div className="video-position">
                   <Video/>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="button-position">
                        <Button aria-label='Om Oss' className="om-oss-button">
                            <Link to ={"/AboutUs"}> <div className="om-oss-button"> Läs om Super Saver</div> </Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>

    </>    
    )
}
export default Categories;






