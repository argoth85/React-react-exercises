import React from "react";


// export class Welcome extends React.Component {
//   render() {
//     return (
//       <div className="welcome">
//         <p>Welcome, {this.props.name}!</p>
//       </div>
//     );
//   }
// }

export function Welcome({name = 'World'}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  )
}