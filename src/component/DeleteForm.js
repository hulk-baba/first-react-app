import React from "react";
import "../bootstrap-3.3.7/dist/css/bootstrap.css"

import DeleteFormData from "./data/DeleteFormData"
import Input from "./singularComponent/Input"


function handle(){
    alert("deleted")
}
function DeleteForm(){
    const formComponents = DeleteFormData.map( x => <Input item={x} key={x.id}/>);
    return(
        <form className="form-group">
            {formComponents}
            <button type="submit" onClick={handle}>Delete</button>

        </form>
        
    )
}

export default DeleteForm;