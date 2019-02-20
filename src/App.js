import React from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
const API_KEY = "cd128563b8d249a2bcd1cabdafd6a782";

class App extends React.Component {
  
  getWeather= async(event) => {
    event.preventDefault();
    const city= event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;
