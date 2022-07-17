import React from "react";



export class TodoList extends React.Component {

    state = {
        items: ['Donatello', 'Michelangelo', 'Raffaello', 'Leonardo'],
        inputValue: ''
    };



    handlerAdd = () => {
        this.setState({
        items: [...this.state.items, this.state.inputValue],
        inputValue: ''
    });
    }
    
    handlerInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }



    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => <li key={item + index}>{item}</li>)}
                </ul>
                <input type="text" name="username" placeholder="Insert a name" onChange={this.handlerInputChange} value={this.state.inputValue}></input>
                <button onClick={this.handlerAdd} disabled={!this.state.inputValue}>Add!</button>
            </div>
        )
    }
}