import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="flex justify-between component-div">
            <div className="flex justify-around g-12">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div className="flex righteous-regular">
                <Link to="/">&lt;L&gt;</Link>
            </div>
        </nav> 
        
    )
}

export default Navbar