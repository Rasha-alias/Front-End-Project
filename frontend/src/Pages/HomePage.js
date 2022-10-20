import React from 'react'
import Icons from "../Components/Icons";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Products from "../Components/Products0";
import {BrowserRouter,Routes,Route} from "react-router-dom";


const HomePage = () => {

  return (
    <div>

      <Header/>
      <Icons/>
     
      <BrowserRouter>
          <Routes>

            <Route path="/" element = {<Categories/>} />
            <Route path="/Products/ :id" element = {<Products/>} />
          </Routes>
      </BrowserRouter>

  
    </div>
  )
}

export default HomePage;