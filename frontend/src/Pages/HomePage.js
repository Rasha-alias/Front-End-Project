import React from 'react'
import Icons from "../Components/Icons";
import GetCategories from "../Components/GetCategories";

const HomePage = () => {
  return (
    <div>
        <Icons/>
        <GetCategories/> {/** call CRUDCoursesData component */} 
    </div>
  )
}

export default HomePage;