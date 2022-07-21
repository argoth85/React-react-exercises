import React from "react";
import { Container } from "./Container";
import {Welcome} from "./Welcome"

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
          <Welcome name = 'Vincenzo'/>
        </Container>
    );
  }
}
