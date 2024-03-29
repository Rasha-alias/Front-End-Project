import { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import {Container, Row, Col, Modal, Button} from "react-bootstrap";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import "../Components/ComponentsStyle.css";
import Icons from "../Components/Icons";
import SearchBar from '../Components/SearchBar';
import Map from "../Components/Map";
import Carosel from "./Carosel"
import Picture1 from "../Images/Picture1.png";


/*
  * A function (component) that representing Get-opration for Products and display them in boxes.
  * @return components (Icons), (Searchbar), (Products Data in boxes), (Carousel) and (Modal).
*/

const Products = () => {

    const {id} = useParams();

    /** URL for the port with products and save it in a varaible  */
    const products_URL =`http://localhost:5000/products/${id}`

    /** set Varible (products) the initial state to an empty array */
    const [products, setProducts] = useState([]);


    /////////////////////////////////////////////Get Products Data///////////////////////////////////////////
    /**
     * An async function to get the products Data from MongoDB 
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
    }, []); 


    /** set Varible (show) the initial state to false value */
    const [show, setShow] = useState(false); 

    const [productData, setProductData] = useState("rasha");


    return (
    <>
        <Icons/>

        <SearchBar/>

        <Container className="body-products-container">
            <Row >
                <Col >
                    <div>

                        {products && products.map((product, index) => {

                         return (index === 3)
                          
                         ?
                         
                        ( <div key={product._id}> <img src= {Picture1} alt ="Rädda mat, Om miljö " className="products-image-style"/> </div>) /** Disply a picture at the index 3*/
                        
                         :

                        ( <div  key={product._id} className="products-container">   {/**Else Display products data */}
                           
                                <div className="left-box">

                                    <div> <img src={product.image} className="product-image" alt="" /> </div>
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-expiration">Utgångsdatum: {product.expiration}</div> 
                                    <div className="product-price"> <span className="product-old-price">{product.old_price}</span> <span className="product-new-price">{product.price} Kr</span></div>

                                </div>

                                <div className="right-box">

                                    <div> <img src={product.icon} className="product-icon" alt=""/> </div>

                                    <div className="product-adress" >
                                        
                                        <button onClick={()=> {
                                                                setProductData(product); {/**Set product data in productData variable when the user click the address button, to use product data in the Modal */}
                                                                setShow(true);           {/**to display Modal when the user clicks the address button */}
                                                                }}

                                                data-toggle="modal" > 

                                            <div> {product.adress} </div> 

                                        </button>

                                    </div> 


                                    <div className="product-city">  {product.city}  </div>   

                                </div>

                            
                                 <div className="link-box"> 

                                 {/** Link to shop page */}        

                                    {/**button that open a new window for the Shop page link */}
                                    <Button  className="link-button"  
                                            onClick={()=> window.open (
                                                                        `${product.link_to_shop}`,
                                                                        "ShopLinkWindow",            /** open window in this page */
                                                                        "height=932 , width=430"
                                                                      )  
                                                    }
                                    > 

                                     <MdOutlineArrowForwardIos/>
                                     </Button>

                                </div>

                            </div> )
                        })}
                        
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                   <Carosel/>   {/** Call the Carousel copmponent */}
                </Col>
            </Row>

        </Container>
                        


         {/** Modal*/}

        <Modal show={show} onHide={()=>setShow(false)}  className="modal-style">
            
            <Modal.Header  closeButton>
                <Modal.Title>
                    Location
                </Modal.Title>
            </Modal.Header>

        
            <Modal.Body>
                <Container className="modal-body-container">
                    <Row className="modal-body-row">
                        <Col className="modal-body-col">

                            <Map 
                            latitude={productData.lat}         /** pass product lat to Map component */
                            longitude={productData.lng}        /** pass product lng to Map component */
                            />

                        </Col>
                    </Row>
                </Container>                   
            </Modal.Body>


            <Modal.Footer className="modal-footer">  

                {/** Display shop name, opening hours, city for the product in modals footer */}

                <div className="shop-name-adress"> {productData.shop_name} {productData.adress}</div>
                <div> Öppet Idag:  <span>{productData.opening_hours}</span>  </div> 
                <div>{productData.adress}, {productData.city}</div>  

                <Button variant="secondary" onClick={()=>setShow(false)} style={{marginLeft:"auto"}} >Stäng </Button>

            </Modal.Footer>
                                        
        </Modal>
            
    </>
     );
}
 
export default Products;