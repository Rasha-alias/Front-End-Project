import React, { useState } from 'react'
import{useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";


/*
  * A function (component) that representing a Map.
  * @return google map with zoom 15 and a specific position according to a given latitude and longitude from the products data.
*/

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