import React from 'react'
import { useState, useEffect, useParams } from "react";
import "./ComponentsStyle.css";

import {Container, Row, Col} from "react-bootstrap";

/*
  * A function (component) that representing  Get-opration for Products.
  * @return components (ReadStudentsData)  which they are called in this component.
  */

const Products = () => {

 const {categoryId} = useParams();


    /** URL for the port with products and save it in a varaible  */
    const products_URL =`http://localhost:5000/Products/${categoryId}`;

    /** set Varible (products) the initial state to an empty array */
    const [products, setProducts] = useState([]);


    /////////////////////////////////////////////Get Products Data///////////////////////////////////////////

/**
     * An async function to get theproducts categories Data from MongoDB 
     * @return products data from 
    */
 const getProductsData = async () => {

    /**waiting for the products URL response */
    const response = await fetch(products_URL);

    /**  wating for json data response and convert it to JS objects*/
    const productsData = await response.json();

     // update the state by setting products data in products varible 
    setProducts(productsData);  

    
    //const categoryProducts = productsData.filter(product => product.category === categoryId);
    // setProducts(categoryProducts);      

    
  
    };

    /** The functon getProductsData Runs only on the first render */
    useEffect(() => {
    getProductsData();
    }, []);



    return (
        <>
        <Container className="body-container">
            <Row>
                <Col>
                <div className="flex-container">
                    {
                        products.map(product =>(

                           

                            <div className="card-style" key={product.id}>
                                 <div>{product.name} </div>
                                 <div>{product.price} </div>  
                               
                            </div>
                           
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
export default Products;