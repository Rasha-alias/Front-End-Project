import React, { useState } from 'react'
//import {Container, Row, Col, Modal, Button} from "react-bootstrap";
import{useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";


//Component Map
const Map = ({latitude, longitude}) => {

const {isLoaded} = useJsApiLoader({googleMapApiKey: "AIzaSyAvYBa0eqmBlMAP3lOVMRboAysX_lmDvBU"});

if(!isLoaded){
  return <div>Loading....</div>
}
  
  return(
    <>



      <GoogleMap zoom={15}  center={{lat:latitude, lng:longitude}} mapContainerClassName="map-style" >

        <Marker position={{lat:latitude, lng:longitude}} />

      </GoogleMap>

 
      
   </> 

  )
}

export default Map