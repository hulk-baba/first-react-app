import React from "react"
import "../../bootstrap-3.3.7/dist/css/bootstrap.css"

function NavbarSingle(props){
    return (
        <li><a href={props.item.href}>{props.item.text}</a></li>
    )
}

export default NavbarSingle;