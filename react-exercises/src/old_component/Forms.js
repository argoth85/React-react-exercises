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
    remember: false,
    disabled: true,
  };

  handleSetChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  onLogin = () => {
    this.setState({
      username: this.state.username,
      password: this.state.password,
    });
  };

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
      disabled: true,
    });
  };

  render() {
    const loginButtonStyle = {
      backgroundColor: this.state.password.length < 8 ? "#f6404f" : "#8fe57e",
    };

    return (
      <div className="container-form">
        <h1>Login</h1>

        <input
          name="username"
          value={this.state.username}
          onChange={this.handleSetChange}
          placeholder="Username"
        ></input>

        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleSetChange}
          placeholder="Password"
        ></input>

        <div className="bottom-form">
          <div className="bottom-form-left">
            
            <label className="label-checkbox">Remember me</label>
            <input className="checkbox-style"
              name="remember"
              type="checkbox"
              checked={this.state.remember}
              onChange={this.handleSetChange}
            ></input>
          </div>

     
          <button className="reset-button" name="reset" onClick={this.handleReset}>
            Reset fields
          </button>

        </div>


        <button className="login-button"
          style={loginButtonStyle}
          name="login"
          disabled={!(this.state.username && this.state.password)}
          onClick={this.onLogin}
        >
          Login
        </button>
        
      </div>
    );
  }
}
