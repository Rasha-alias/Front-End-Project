import React from 'react'
import {useParams } from "react-router-dom";
import "../Components/ComponentsStyle.css";


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