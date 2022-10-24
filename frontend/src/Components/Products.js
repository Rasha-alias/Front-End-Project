import { useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import {Container, Row, Col, Modal, Button} from "react-bootstrap";
import "../Components/ComponentsStyle.css";
import Map from "../Components/Map";


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

    };

    /** The functon getProductsData Runs only on the first render */
    useEffect(() => {
    getProductsData();
    }, []); 


    /** set Varible (show) the initial state to false value */
    const [show, setShow] = useState(false); 

    /**A function that update show state by setting true value in show state by function setShow */
   // const handelShow = () => setShow(true);

    /**A function that update show state by setting false value in show state by function setShow */
  //  const handelClose = () => setShow(false);
    
    const [productData, setProductData] = useState("rasha");
    //const [productLat, setProductLat] = useState(null);
    //const [productLng, setProductLng] = useState(null);



    return (
    <>
        <Container>
            <Row>
                <Col>
                    <div>
                        {products && products.map((product) => (

                          <>
                          <div style={{width:"400px"}} key={product._id} >
                            <div>{product.name}</div>
                            <div>{product.expiration} </div> 
                            <div>{product.old_price} </div> 
                            <div>{product.price}</div>
                            <div><Button onClick={()=> {
                                 setProductData(product);
                                // setProductLat(parseFloat(product.lat));
                                // setProductLng(parseFloat(product.lng));
                                 setShow(true);
                                 } }
                                  className="btn btn-success" 
                                  data-toggle="modal"> 
                                  <span>{product.adress} </span>
                                  </Button>
                                  </div> 
                            
                            <br/>
                            </div>
                            <br/>
                        
                         </>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>


        <Modal show={show} onHide={()=>setShow(false)}  size="lg" aria-labelledby="contained-modal-title-vcenter" >
            
            <Modal.Header  closeButton>
                <Modal.Title>
                    Location
                </Modal.Title>
            </Modal.Header>

        
            <Modal.Body>
                <Container>
                    <Row>
                        
                        <Col xs={12} md={12}>

                            < Map 
                            city={productData.city}
                            adress={productData.adress}
                            latitude={productData.lat}
                            longitude={productData.lng}      
                            />

                        </Col>
                    </Row>
                </Container>                   
            </Modal.Body>


            <Modal.Footer className="justify-content-between">  
            {productData.name}

            <Button variant="secondary" onClick={()=>setShow(false)} style={{marginLeft:"auto"}} >Stäng </Button>

            </Modal.Footer>
                                        
        </Modal>




            
    </>
     );
}
 
export default Products;