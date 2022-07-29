import React, { PureComponent, useState } from "react";

class PureComp extends PureComponent {
  state = {
    name: "Yemi",
  };

  render() {
    return (
      <>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.setState({ name: "Fikkles" })}>
          Click to Change
        </button>
      </>
    );
  }
}

export default PureComp;

// const PureCompF = () => {
//   const [name, setName] = useState('Francis');
//   return(
//     <>
//      return (
//       <>
//         <h3>{name}</h3>
//         <button onClick={() => setName( "Fikkles" )}>
//           Click to Change
//         </button>
//       </>
//     );
//     </>
//   )
// };
