import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Enter the City" />
      <input type="text" name="country" placeholder="Country" />
      <input type="submit" />
    </form>
  );
};
export default Form;
