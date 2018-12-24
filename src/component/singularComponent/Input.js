import React from "react";
import "../../bootstrap-3.3.7/dist/css/bootstrap.min.css"

function Input(props){
    let t="form-control";
    if(props.item.type === "checkbox"){
        t = "";
    }
    return (
       <div><label>{props.item.text} :</label><input className={t} type={props.item.type}></input></div>
    )
}
export default Input;