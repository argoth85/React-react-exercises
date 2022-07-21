import React from "react";
import { Container } from "./Container";
import {Sum} from "./Sum"

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
        <Container>
         <Sum />
        </Container>
    );
  }
}
