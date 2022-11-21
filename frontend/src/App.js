import React from 'react'
import {Routes,Route} from "react-router-dom";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from './Components/Products';
import SearchResult from './Components/SearchResult';
import AboutUs from './Components/AboutUs';


/*
  * A function that representing App.
  * @return Header and a page(component) to any of the paths below.
*/

const App = () => {

  return (
    
    <div className="App">
     
      <Header/>
     
      <Routes>

            <Route path="/" element = {<Categories/>} />
           
            <Route path="Products/:id" element = {<Products/>} />

            <Route path="SearchResult/:value" element = {<SearchResult/>} />

            <Route path="AboutUs/" element = {<AboutUs/>}/>
              
      </Routes>

    </div>
  )
}

export default App;
