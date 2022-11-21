import React from 'react'
import {Carousel} from 'react-bootstrap';
import "./ComponentsStyle.css";
import coop1  from "../Images/Carosel/coop1.jpg";
import coop2  from "../Images/Carosel/coop2.jpg";
import ica1  from "../Images/Carosel/ica1.jpg";
import ica2  from "../Images/Carosel/ica2.jpg";
import lidl1  from "../Images/Carosel/lidl1.jpg";
import lidl2  from "../Images/Carosel/lidl2.jpg";
import willys1  from "../Images/Carosel/willys1.jpg";
import willys2  from "../Images/Carosel/willys2.jpg";


/*
  * A function (component) that representing all Carousel.
  * @return Carousel (images plays on slide).
  */

const Carosel = () => {

  return (
    <div className="carosel-container">
         <Carousel fade className="carosel-style" interval={2000}>
            
            <Carousel.Item className="carousel-item">
                <img src={coop1} className="d-block w-100"  alt="First slide" />                
            </Carousel.Item>

            <Carousel.Item>
                <img src={ica1}  className="d-block w-100" alt="Second slide"/>              
            </Carousel.Item>

            <Carousel.Item>
                <img  src={willys1} className="d-block w-100" alt="Third slide"/>          
            </Carousel.Item>  

            <Carousel.Item>
                <img src={lidl1} className="d-block w-100"  alt="First slide" />            
            </Carousel.Item>

            <Carousel.Item>
                <img src={coop2} className="d-block w-100"  alt="First slide" />           
            </Carousel.Item>

            <Carousel.Item>
                <img src={ica2} className="d-block w-100"  alt="First slide" />           
            </Carousel.Item>

            <Carousel.Item>
                <img src={willys2} className="d-block w-100"  alt="First slide" />            
            </Carousel.Item>

            <Carousel.Item>
                <img src={lidl2} className="d-block w-100"  alt="First slide" />
            </Carousel.Item>

        </Carousel>
    </div>
  )
}

export default Carosel




 