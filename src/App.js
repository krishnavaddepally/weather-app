import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
const API_KEY = "cd128563b8d249a2bcd1cabdafd6a782";

class App extends Component {
  getWeather= async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
  }
  render() {
    return(
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;
