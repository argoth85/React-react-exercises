import React from 'react';
import ReactDOM from 'react-dom';
// import React, { StrictMode } from "react";
import { App } from "./App";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);