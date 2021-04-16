import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return <nav className="navBar">
        <h4 className="navBarItem"><Link to="/">Home</Link></h4>
        <h4 className="navBarItem"><Link to="/Report">Disaster Report</Link></h4>
        <h4 id="register"><Link to="/LoginSignup">Login/Signup</Link></h4>
    </nav>
}

export default Navbar;