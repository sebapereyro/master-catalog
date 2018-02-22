// Rendering layer of the application
// Routing (React Router)
// Name strategy is it is exporting a class or a component will be Capital
// othewise if we jsut export functions will be lowercase

//using webpack and babel
import React from 'react';

// const App = () => {
//   return <div>Hi There is this good or what</div>;
// };

class App extends React.Component {
  render() {
    return <div>This React thinggy is awesome!</div>;
  }
}

export default App;
