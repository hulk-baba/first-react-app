import React from 'react';
import logo from './logo.svg';
//import styles
import './App.css';


// Component Imports

import Navbar from "./component/Navbar";
import AddForm from "./component/AddForm";
import DeleteForm from "./component/DeleteForm";

function App () {
  return(
    <div>
      <Navbar/>
      <div className="container">
        <AddForm />
      </div>

      <div className="container">
        <DeleteForm />
      </div>
    </div>
  )
};

export default App;
