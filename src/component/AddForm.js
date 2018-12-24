import React from "react";
import "../bootstrap-3.3.7/dist/css/bootstrap.css"

import AddFormData from "./data/AddFormData"
import Input from "./singularComponent/Input"

function handle(){
    alert("button clicked")
}

function AddForm(){
    const formComponents = AddFormData.map( x => <Input item={x} key={x.id}/>);
    return(
        <form className="form-group">
            {formComponents}
            <button type="submit" onClick={handle}>Submit to Add</button>
        </form>
        
    )
}

export default AddForm;