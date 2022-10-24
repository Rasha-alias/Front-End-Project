import React, { useState } from 'react'
//import {Container, Row, Col, Modal, Button} from "react-bootstrap";
import{useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";


//Component Map
const Map = ({city, adress, latitude, longitude}) => {

const {isLoaded} = useJsApiLoader({googleMapApiKey: "AIzaSyAvYBa0eqmBlMAP3lOVMRboAysX_lmDvBU"});

if(!isLoaded){
  return <div>Loading....</div>
}

//const center =  { lat: 59.85893, lng: 17.672098}


  
  return(
    <>

<div>{city}</div>
 <div>{adress}</div>
<div>{latitude}</div>
 <div>{longitude}</div>




<GoogleMap zoom={15}  center={{lat:latitude, lng:longitude}} mapContainerStyle={{ width: '400px', height: '300px' }}>

<Marker position={{lat:latitude, lng:longitude}} />

</GoogleMap>
 


   </>
   

  )
}

export default Map