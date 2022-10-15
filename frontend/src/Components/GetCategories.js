import React from 'react'
import { useState, useEffect } from "react";
import "./ComponentsStyle.css";

import {Container, Row, Col, Card} from "react-bootstrap";

/*
  * A function (component) that representing all Get-opration for Categories.
  * @return components (ReadStudentsData)  which they are called in this component.
  */

const GetCategories = () => {

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
        <Container className="body-container">
            <Row>
                <Col>
                <div className="flex-container">
                    {
                        categories.map(category =>(

                           

                            <Card className="card-style" key={category.id}>
                                 <Card.Img className="card-image" variant="top" src={category.image}  />
                                 
                                 <Card.Body className="card-body">
                                    <Card.Title className="card-title">{category.name}</Card.Title>
                                 </Card.Body>
                            </Card>
                           
                        )
                        )
                    }
                </div>

                </Col>
            </Row>
        </Container>

        </>    
    )
}
export default GetCategories;