import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

const userName = <strong> Vincenzo</strong>;

export class Age extends React.Component {
    render() {
      return <p>Your age is {this.props.age}</p>;
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
