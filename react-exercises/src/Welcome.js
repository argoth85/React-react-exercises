import React from "react";

export class Welcome extends React.Component {
    render (){
        return <p>Welcome, {this.props.name}!</p>
    }
}


/*
Se non setto un prop name in Welcome non viene renderizzato nulla,
ma posso settare un valore di default di prop name tramite defaulProps,
nel modo seguente:
*/

Welcome.defaultProps = {
  name: 'Giuseppe'
}

