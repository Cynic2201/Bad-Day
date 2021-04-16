import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return<nav className="navBar">
        <link rel="stylesheet" href="./index.css" type="text/css" />
        <a class="navBarItem"><Link to="/">Home</Link></a>
        <a class="navBarItem"><Link to="/Report">Disaster Report</Link></a>
        <a id="register"><Link to="/LoginSignup">Login/Signup</Link></a>
    </nav>
}

export default Navbar;