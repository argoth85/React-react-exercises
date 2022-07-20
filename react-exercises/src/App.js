import React from "react";
// import { Hello } from "./Hello";
// import { Welcome } from "./Welcome";
// import {ClickTracker,ClickCounter,Counter} from "./Counter";
// import {Login} from "./Forms"
// import {InteractiveWelcome} from "./Forms"
// import {UncontrolledLogin} from './UncontrolledLogin'
import { TodoList } from "./TodoList";
import {Container} from "./Container"



export class App extends React.Component {
  render() {
    return (
        <Container title="To Do list:">
        {/* <Hello />
        <Welcome name='John' age={36}/>
        <Counter initialValue={0} incrementBy={1} interval={1000}/>
        <ClickCounter />
        <ClickTracker /> */}
        {/* <InteractiveWelcome /> */}
        {/* <Login /> */}
        {/* <br/>
        <UncontrolledLogin /> */}
        <TodoList
          render = {(items) => {
            return (
              <div>
              <ul>
                    {items.map((item, index) =><li key={item + index}>{item}
                    <button className="button-remove-item" onClick={() => {items.splice(index, 1);
                    this.setState({ 
                            items: items });}}>Remove Item</button>
                    </li>)}
                </ul>
                </div>
            )
          }}
          ></TodoList>
        </Container>
    );
  }
}
