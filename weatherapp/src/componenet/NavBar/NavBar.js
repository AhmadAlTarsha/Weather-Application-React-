import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css"
const NavBar = () => {
    // const {IsLoggedIn} = useContext(AppContext);

    return (
    
    <div  className='navBar'><nav className='nav_content'>
        < Link to="/CurrentWeather" > CurrentWeather</Link > <Link to="/Search">Search</Link>

    </nav></div>
    
    )
}

export default NavBar