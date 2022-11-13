import React from 'react'
import './ComponentsStyle.css'
import ica from "../Images/ica.png";
import coop from "../Images/coop.png";
import willys from "../Images/willys.png";
import lidel from "../Images/lidel.png";


const Icons = () => {
    
  return (

      <div className="icons-container">

          <div className="icons"><img src={ica} alt="ica icon" className="icon-img"></img></div>
          <div className="icons"><img src={coop} alt="ica icon" className="icon-img"></img></div>
          <div className="icons"><img src={willys} alt="ica icon" className="icon-img"></img></div>
          <div className="icons"><img src={lidel} alt="ica icon" className="icon-img"></img></div>
     
      </div>
      
  )
}
export default Icons