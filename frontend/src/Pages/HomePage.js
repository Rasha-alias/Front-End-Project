import React from 'react'
import Icons from "../Components/Icons";
import Header from "../Components/Header";

import Categories from "../Components/Categories";
import Products from "../Components/Products";

import {BrowserRouter,Routes,Route,} from "react-router-dom";



const HomePage = () => {

  
  return (
    <div>

      <Header/>
      <Icons/>
     
      <BrowserRouter>
        <Routes>

            <Route path="/" element = {<Categories/>} />
            <Route path="/Products/:categoryId" element = {<Products/>} /> 

        </Routes>
        </BrowserRouter>
l
    </div>
  )
}

export default HomePage;