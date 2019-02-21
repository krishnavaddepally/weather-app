import React from "react"

const Weather = props => {
  return(
    <div className="output">
        {props.city && props.country &&
          <div >
            <label>Location:</label>
            {props.city},{props.country}
          </div>
        }
        {props.temperature &&
          <div>
            <label>Temperature:</label>
            {props.temperature}(kelvin Scale)
          </div>
        }
        {
          props.humidity &&
          <div>
            <label>Humidity:</label>
            {props.humidity}
          </div>
        }
        {
          props.description &&
          <div>
            <label>Conditions: </label>
            {props.description}
          </div>
        }
        {
          props.error &&
          <div>
            {props.error}
          </div>
        }
    </div>
  )
}


export default Weather;
