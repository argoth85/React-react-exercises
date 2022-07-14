import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  userName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <label>Username:</label>
        <input name="username" onChange={this.userName}></input>
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false
  };

  handleSetChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <label>Username</label>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleSetChange}
        ></input>

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleSetChange}
        ></input>

        <label>Remember me</label>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleSetChange}
        ></input>
      </div>
    );
  }
}
