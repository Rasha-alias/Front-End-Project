import {useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Components/ComponentsStyle.css";

const Products = () => {
    const {id} = useParams()
    /** URL for the port with products and save it in a varaible  */
    const products_URL =`http://localhost:5000/products/${id}`

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

     //update the state by setting products data in products varible 
    setProducts(productsData);  

    // const categoryProducts = productsData.filter(product => product.category === categoryId);
    //setProducts(categoryProducts);      
  
    };

    /** The functon getProductsData Runs only on the first render */
    useEffect(() => {
    getProductsData();
    }, []); 

    return ( <>{products && products.map((product) => (
        <>
        <span>
            <div>{product.name}</div>
            <div>{product.expiration} </div> 
            <div>{product.old_price} </div> 
            <div>{product.price}</div>
            <div>{product.adress} </div>
            <div>{product.city} </div> 
            <div>{product.lat} </div>
            <div>{product.lng} </div>   
            <div>{product.opening_hours} </div>
            </span> <br/>
        </>
    ))}</> );
}
 
export default Products;