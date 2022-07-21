import React from "react";
import { ClickCounterFunction } from "./ClickCounterFunction";
import { Container } from "./Container";


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
         <ClickCounterFunction/>
        </Container>
    );
  }
}
