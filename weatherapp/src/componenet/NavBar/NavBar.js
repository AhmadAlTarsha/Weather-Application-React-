import { React, useContext } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    // const {IsLoggedIn} = useContext(AppContext);

    return (<div className='navBar'>
        < Link to="/Dashboard" > Dashboard</Link > <Link to="/AddArticle">AddArticle</Link>

    </div>
    )
}

export default NavBar