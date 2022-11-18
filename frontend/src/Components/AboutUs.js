import React from 'react'
import Picture1 from "../Images/Picture1.png";
import Picture3 from "../Images/Picture3.png";

const AboutUs = () => {

  return (

    <div className="about-us">


      <div className="about-us-header">
        <div className="header-text"><sup>Om</sup>SuperSaver</div>
        <img src={Picture3} alt="Super Saver" className="tree-image-style"/>
      </div>

      <div className="paragraph"> Visste du att <strong> 1/3 </strong>av all mat som produceras i världen slängs? </div>

      <div className="paragraph">Att minska matsvinnet i världen är ett viktigt bidrag till klimatet, 
      och det är därför vi är här!</div>
      
      <div className="paragraph">Vårt uppdrag är att hjälpa matbutiker att ta tillvara på så mycket mat som möjligt i butikerna
          och minska mat som slängs i onödan. Du kan hitta varor som säljs för halva priset genom vår app. </div>
      
      
      <div>
        <img src={Picture1} alt = "Rädda mat, Om miljö " className="about-image-style"/>
      </div>

    </div>
    
  )
}

export default AboutUs