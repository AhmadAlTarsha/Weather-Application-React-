import { React, useContext,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
const NavBar = () => {


    
  
    return (
    
    <div  className='navBar'><nav className='nav_content'>
        < Link to="/CurrentWeather" onClick={()=>{
            console.log(userLocation);
        }}> CurrentWeather</Link > <Link to="/Search">Search</Link>

    </nav></div>
    
    )
}

export default NavBar