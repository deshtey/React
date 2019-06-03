import React from "react";
import { Container } from "reactstrap";
const Weather = props => {
  return (
    <Container>
      {props.city && <p>City: {props.city}</p>}
      {props.country && <p>Country: {props.country}</p>}
      {props.temp && <p>Temperature: {props.temp}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
    </Container>
  );
};
export default Weather;
