import React from 'react'
import {useParams } from "react-router-dom";
import "../Components/ComponentsStyle.css";


/*
  * A function (component) that representing a Wrong Input.
  * @return a message which informs the user that there is not result with the entered input if the input does not match any product in the data .
*/

const WrongInput = () => {

  const {value} = useParams();

  return (
   <>

    <div className="wrong-word-message">
      Inga resultat med
       <div className="searched-word"> “ {value} ” </div> 
    </div>

    <div className="wrong-word-message">
     Testa med andra sökord eller bläddra i våra kategorier
    </div>

   </>
  )
}

export default WrongInput