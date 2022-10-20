import React from 'react'
import Icons from "./Components/Icons";
import Header from "./Components/Header";
import Categories from "./Components/Categories";

import {BrowserRouter,Routes,Route} from "react-router-dom";
//import Products from './Products2';
import Products from './Components/Products';


const App =()=>{
  return (
    <div className="App">
      <Header/>
      <Icons/>
     
      <Routes>
            <Route path="/" element = {<Categories/>} />
            {/*<Route path="/Products2/:id" element = {<Products/>} />*/}
            <Route path="Products/:id" element = {<Products/>} />
            
      </Routes>

    </div>
  )
}

export default App;
