import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue
  };

  constructor(props) {
    super(props)
    
    setInterval(() => {
        this.setState((newState) => {
            return {
                count: newState.count + this.props.incrementBy
            }
        })
    }, this.props.interval);
    
}

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
