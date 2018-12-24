import React from 'react';
import logo from './logo.svg';
//import styles
import './App.css';


// Component Imports

import Navbar from "./component/Navbar";
import AddForm from "./component/AddForm";
import DeleteForm from "./component/DeleteForm";

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      showForm : false,
    }
    this.handle = this.handle.bind(this);
  }
  handle(){
    this.setState( (prevState) => {
      return {
        showForm : !prevState.showForm,
      }
    })
  }
 
  render(){
    const form1 = (<div className="container">
                    <AddForm />
                  </div>) ; 
    const  form2 = <div className="container">
                    <DeleteForm />
                  </div>;
    return(
      <div>
        <Navbar/>
        <div className="container">
        <button  className="btn btn-primary" onClick={this.handle}>Click to show/remove form</button>
        </div>
       
        {this.state.showForm && form1}
      </div>
    )
  }
  
};

export default App;
