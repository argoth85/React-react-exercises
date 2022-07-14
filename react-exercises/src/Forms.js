import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {

    state ={
        name:''
    }

    userName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return (
            <div>
                <label>Username:</label>
                <input name="username" onChange={this.userName}></input>
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}