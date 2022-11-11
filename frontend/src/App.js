import React from 'react'
import {Routes,Route} from "react-router-dom";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from './Components/Products';
import Icons from "./Components/Icons";
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResult';
import AboutUs from './Components/AboutUs';



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
