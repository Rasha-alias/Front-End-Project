import React from 'react'
import { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import {Container, Row, Col, Modal, Button} from "react-bootstrap";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import "../Components/ComponentsStyle.css";
import Icons from "../Components/Icons";
import SearchBar from '../Components/SearchBar';
import Map from "../Components/Map";
import WrongInput from "../Components/WrongInput";
import Picture2 from "../Images/Picture2.png";
import Carosel from "./Carosel"



const SearchResult = () => {

    const {value} = useParams();

    /** URL for the port with products and save it in a varaible  */
    const products_URL =`http://localhost:5000/SearchResult/${value}`

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

    };

    /** The functon getProductsData Runs only on the first render */
    useEffect(() => {
    getProductsData();
    }, [value]); 
           
   
    /** set Varible (show) the initial state to false value */
    const [show, setShow] = useState(false); 
    
    const [productData, setProductData] = useState("rasha");


////////////////////////////////////////////////////////////////////////////////////////////////////////

var  productsArray = products && products  
                    .map((product) => (

                        <div key={product._id} className="products-container" > {/**link to the shop */}
                    
                            <div className="left-box">

                                <div> <img src={product.image} className="product-image" alt="" /> </div>
                                <div className="product-name">{product.name}</div>
                                <div className="product-expiration">Utgångsdatum: {product.expiration}</div> 
                                <div className="product-price"> <span className="product-old-price">{product.old_price}</span> <span className="product-new-price">{product.price} Kr</span></div>

                            </div>

                            <div className="right-box">

                                <div>  <img src={product.icon} className="product-icon" alt=""/> </div>

                                <div className="product-adress" >
                                    
                                    <button onClick={()=> {
                                                            setProductData(product);
                                                            setShow(true);
                                                            }}

                                            data-toggle="modal" > 

                                        <div> {product.adress} </div> 

                                    </button>

                                </div> 

                                <div className="product-city">  {product.city}  </div>   

                            </div>

                            <div className="link-box">

                            {/** Link to shop name */}
                            {/* <a href={product.link_to_shop}>   <MdOutlineArrowForwardIos/> </a>*/}

                                {/**button that open a new window for the Shop page link */}
                                <Button className="link-button"  
                                        onClick={()=> window.open (
                                                                    `${product.link_to_shop}`,
                                                                    "ShopLinkWindow",
                                                                    "height=932 , width=430"
                                                                )  
                                                }
                                > 
                                                        
                                                    <MdOutlineArrowForwardIos /> 
                                                    </Button>
                            </div>

                        </div>                   

                    ))


    return (
    <>
        <Icons/>
        <SearchBar/>
    
        <Container className="body-products-container">
                <Row>
                    <Col>
                        <div>
                            
                            { productsArray.length ? productsArray: <WrongInput/> }
                        
                        </div>

                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <img src={Picture2} alt = "Rädda mat, Om miljö " className="products-image-style" style={{opacity:"0.9"}}/>
                    </Col>
                </Row>
            </Container>

                            

            <Modal show={show} onHide={()=>setShow(false)}  className="modal-style">
                
                <Modal.Header  closeButton>
                    <Modal.Title>
                        Location
                    </Modal.Title>
                </Modal.Header>

            
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>

                                <Map 
                                latitude={productData.lat}
                                longitude={productData.lng}      
                                />

                            </Col>
                        </Row>
                    </Container>                   
                </Modal.Body>


                <Modal.Footer className="modal-footer"> 

                <div className="shop-name-adress"> {productData.shop_name} {productData.adress}</div>
                <div> Öppet Idag:  <span>{productData.opening_hours}</span>  </div> 
                <div>{productData.adress}, {productData.city}</div>  

                <Button variant="secondary" onClick={()=>setShow(false)} style={{marginLeft:"auto"}} >Stäng </Button>

                </Modal.Footer>
                                            
            </Modal>


    
    </> 
   )
}
export default SearchResult