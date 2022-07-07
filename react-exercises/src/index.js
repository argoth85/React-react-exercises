import React from "react";
import ReactDOM from 'react-dom';
import { Hello } from "./Hello";

export class App extends React.Component {
    render(){
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);