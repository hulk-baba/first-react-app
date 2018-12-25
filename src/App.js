import React from 'react';
import logo from './logo.svg';
//import styles
import './App.css';


// Component Imports

import Navbar from "./component/Navbar";
import AddForm from "./component/AddForm";
import DeleteForm from "./component/DeleteForm";
import AddEmployee from "./component/AddEmployee";
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      showForm : false,
      deleteForm : false,
    }
    this.handle = this.handle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.setState( (prevState) => {
      return {
        deleteForm : !prevState.deleteForm,
      }
    })
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
    const  form2 = (<div className="container">
                    <DeleteForm />
                    </div>);
    const form3 = (<div className="container">
                    <AddEmployee />
                    </div>) ;
    return(
      <div>
        <Navbar/>
        <div className="container">
        <button  className="btn btn-primary" onClick={this.handle}>{this.state.showForm ? "Click to collpase" : "Add Employee"}</button>

        </div>
       
        {this.state.showForm && form3}
          {/* <footer> <TrialForm /> </footer> */}
      
      </div>

      
    )
  }
  
};

export default App;
