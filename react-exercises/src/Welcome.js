import React from "react";
import {Age} from "./Age";


export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age >= 18 && this.props.age <= 65
        ? <Age age={this.props.age}/>
        : <p><i>Your date is not set</i></p>}
      </div>
    );
  }
}