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
         <Sum numbers = {[3,6,12,56,78,90]}/>
        </Container>
    );
  }
}
