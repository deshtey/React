import React from "react";

const Weather = props => {
  return (
    <div>
      {props.city && <p>City: {props.city}</p>}
      {props.country && <p>Country: {props.country}</p>}
      {props.temp && <p>Temperature: {props.temp}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
    </div>
  );
};
export default Weather;
