import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form ffrom "./components/Form"

class App extends Component {
  render() {
    return(
      <div>
        <Titles/>
        <Form/>
      </div>
    );
  }
}

export default App;
