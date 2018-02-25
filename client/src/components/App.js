// Rendering layer of the application
// Routing (React Router)
// Name strategy is it is exporting a class or a component will be Capital
// othewise if we just export functions will be lowercase

//using webpack and babel
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Help from './Help';
import Header from './Header';
import Landing from './Landing';
// functional component. good for just views
// const App = () => {
//   return <div>Hi There is this good or what</div>;
// };

//dummy components

const Dashboard = () => <h2> Dashboard </h2>;
const PackList = () => <h2> PackList </h2>;
const PackNew = () => <h2> PackNew </h2>;
const PackShow = () => <h2> PackShow </h2>;

//this is a very nice approach create dummy containers that we will later fill

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/packs" component={PackList} />
            <Route exact path="/packs/new" component={PackNew} />
            <Route exact path="/help" component={Help} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
