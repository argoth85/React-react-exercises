import React from "react";
import { Container } from "./Container";
import { DisplayLanguage, LanguageContext } from "./DisplayLanguage";

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
      <LanguageContext.Provider value={this.state.language}>
        <Container title="To Do list:">
          <select value={this.state.language} onChange={this.handleLanguageChange}>
            <option value="en">Inglese</option>
            <option value="it">Italiano</option>
          </select>
          <DisplayLanguage />
        </Container>
      </LanguageContext.Provider>
    );
  }
}
