import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

const userName = <strong> Vincenzo</strong>;

export class App extends React.Component {
    render(){
        return (
            <div>
                <Hello/>
                <Welcome name={userName} age={36}/>
            </div>
        )
    }
}