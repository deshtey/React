import React from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";

const InputForm = props => {
  return (
    <Form onSubmit={props.getWeather}>
      <FormGroup>
        <Label for="city">City</Label>
        <Input
          type="text"
          id="city"
          name="city"
          placeholder="Enter the City"
          invalid={props.errors}
        />
        <FormFeedback>Enter a valid City</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="country">Country</Label>
        <Input type="text" id="country" name="country" placeholder="Country" />
      </FormGroup>
      <Button>submit</Button>
    </Form>
  );
};
export default InputForm;
