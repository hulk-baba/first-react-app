import React from "react";
import "../bootstrap-3.3.7/dist/css/bootstrap.css"

class AddEmployee extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            password : "",
            email : "",
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleName(event){
        this.setState({name: event.target.value.toLowerCase()});
    }
    handleEmail(event){
        this.setState({email: event.target.value.toLowerCase()});
    }
    handlePassword(event){
        this.setState({password: event.target.value.toLowerCase()});
    }
    onSubmit(event){
        let output = {};
        output.name  = this.state.name;
        output.email = this.state.email;
        output.password = this.state.password;
        console.log(output);
        event.preventDefault();
    }
    render(){
        return(
            <form className="form-group" onSubmit={this.onSubmit}>
                <label>Name : </label><input className="form-control" type="text" value={this.state.name} onChange={this.handleName}/>
                <br/>
                <label>Email : </label><input className="form-control" type="email" value={this.state.email} onChange={this.handleEmail} />
                <br/>
                <label>Password : </label><input className="form-control" type="password" value={this.state.password} onChange={this.handlePassword} />
                <br/>
                <button type="submit">Submit to Add</button>
            </form>
            
        )
    }
    
}

export default AddEmployee;