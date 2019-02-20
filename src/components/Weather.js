import React from "react"
class Weather extends React.Component{
  render(){
    return(
      <div>
          {this.props.city && this.props.country &&
            <div>
              <label>Location:</label>
              {this.props.city},{this.props.country}
            </div>
          }
          {this.props.temperature &&
            <div>
              <label>Temperature:</label>
              {this.props.temperature}
            </div>
          }
          {
            this.props.humidity &&
            <div>
              <label>Humidity:</label>
              {this.props.humidity}
            </div>
          }
          {
            this.props.description &&
            <div>
              <label>Conditions: </label>
              {this.props.description}
            </div>
          }
          {
            this.props.error &&
            <div>
              {this.props.error} 
            </div>
          }
      </div>
    );
  }
}

export default Weather;
