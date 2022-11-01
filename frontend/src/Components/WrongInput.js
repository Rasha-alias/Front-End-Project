import React from 'react'
import { useState, useEffect} from "react";
import {useParams } from "react-router-dom";


const WrongInput = () => {

  
  const {value} = useParams();

  /** URL for the port with products and save it in a varaible  */
  const products_URL =`http://localhost:5000/WrongInput/${value}`

  /** set Varible (products) the initial state to an empty array */
  const [products, setProducts] = useState([]);


  

  const getProductsData = async () => {

  /**waiting for the products URL response */
  const response = await fetch(products_URL);

  /**  wating for json data response and convert it to JS objects*/
  const productsData = await response.json();

   //update the state by setting products data in products varible 
  setProducts(productsData);  

  };

  /** The functon getProductsData Runs only on the first render */
  useEffect(() => {
  getProductsData();
  }, [value]); 


  return (
   <>
<div>{products}</div>

   </>
  )
}

export default WrongInput