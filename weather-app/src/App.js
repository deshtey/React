import React, { Component } from "react";
import InputForm from "./components/form";
import Weather from "./components/weather";
import { Container } from "reactstrap";

const API_Key = "004d555f33279aedcf1245900370a34b";
class App extends Component {
  state = {
    city: "",
    country: "",
    temp: "",
    humidity: "",
    description: "",
    errors: ""
  };
  getWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const countryinfo = event.target.elements.country.value;
    const country = countryinfo.length > 0 ? "," + countryinfo : "";
    const api_data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}${country}&appid=${API_Key}&units=metric`
    );
    const weather_data = await api_data.json();
    if (weather_data.name && weather_data.sys.country) {
      this.setState({
        city: weather_data.name,
        country: weather_data.sys.country,
        temp: weather_data.main.temp,
        humidity: weather_data.main.humidity,
        description: weather_data.weather[0].description,
        errors: ""
      });
    } else {
      this.setState({
        errors: "new error"
      });
    }
  };
  render() {
    return (
      <Container>
        <InputForm
          className="inputform"
          getWeather={this.getWeather}
          errors={!!this.state.errors}
        />
        <Weather
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          humidity={this.state.humidity}
          temp={this.state.temp}
        />
      </Container>
    );
  }
}
export default App;
