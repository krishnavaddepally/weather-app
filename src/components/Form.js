import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather} id="form">
		<div><input type="text" name="city" placeholder="City..." className="inputField"/></div>
		<div><input type="text" name="country" placeholder="Country..." className="inputField"/></div>
		<div><button className="button">Get Weather</button></div>
	</form>
);

export default Form;
