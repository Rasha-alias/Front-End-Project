import React from 'react'
import {Routes,Route} from "react-router-dom";
import Icons from "./Components/Icons";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from './Components/Products';
//import Products from './Products2';


const App =()=>{
  return (
    <div className="App">
      <Header/>
      <Icons/>
     
      <Routes>

            <Route path="/" element = {<Categories/>} />
           
            <Route path="Products/:id" element = {<Products/>} />

         {/*<Route path="/Products2/:id" element = {<Products/>} />*/}
            
      </Routes>

    </div>
  )
}

export default App;
