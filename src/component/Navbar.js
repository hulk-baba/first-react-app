import React from 'react';
//import styles
import "../bootstrap-3.3.7/dist/css/bootstrap.min.css"

import tiles from "./data/NavbarTiles";
import NavbarSingle from "./singularComponent/NavbarSingle";

function Navbar(){
    const navbarComponents = tiles.map( x => < NavbarSingle item={x} key={x.id}/>);
    return (
    <div className="container">
        <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
        {navbarComponents}
        </ul>
        </nav>
    </div>
    )
}

export default Navbar;

