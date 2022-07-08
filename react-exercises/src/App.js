import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

const userName = <strong>Vincenzo</strong>;

export class Age extends React.Component {
  render() {
    return (
        <div>
            {this.props.age >= 18 && <p>Your age is {this.props.age}</p>}
        </div>
    );
  }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={userName} />
      </div>
    );
  }
}
