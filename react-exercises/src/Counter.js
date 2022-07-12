import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue
  };

// Utilizzando componentDidMount non ho bisogno del costruttore
// Come mai il counter diventa (+2) invece di (+1)?
    componentDidMount(){
      setInterval(() => {
        this.setState((newState) => {
            return {
                count: newState.count + this.props.incrementBy
            }
        })
    }, this.props.interval);
  }
    
  render() {
    return <CounterDisplay count={this.state.count}/>;
  }
}


export class CounterDisplay extends React.Component {
    render(){
        return <h1>Count: {this.props.count}</h1>
    }
}
