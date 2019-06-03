import React, { Component } from "react";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends Component {
  state = {
    city: "",
    country: "",
    temp: "",
    humidity: "",
    description: "",
    errors: []
  };
  getWeather = event => {
    event.preventDefault();
    this.setState({
      city: "Nairobi",
      country: "KE",
      temp: "25",
      humidity: "25",
      description: "Sunny"
    });
  };
  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          humidity={this.state.humidity}
          temp={this.state.temp}
        />
      </div>
    );
  }
}
export default App;
