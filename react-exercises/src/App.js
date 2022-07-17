import React from "react";
// import { Hello } from "./Hello";
// import { Welcome } from "./Welcome";
// import {ClickTracker,ClickCounter,Counter} from "./Counter";
import {Login} from "./Forms"
// import {InteractiveWelcome} from "./Forms"
// import {UncontrolledLogin} from './UncontrolledLogin'
// import { TodoList } from "./TodoList";


export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        {/* <Welcome name='John' age={36}/> */}
        {/* <Counter initialValue={0} incrementBy={1} interval={1000}/>
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome /> */}
        <Login />
        {/* <br/>
        <UncontrolledLogin /> */}
        {/* <TodoList /> */}
      </div>
    );
  }
}
