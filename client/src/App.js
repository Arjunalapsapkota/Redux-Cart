import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home/Home";
import Cartz from "./componenets/Cartz/Cartz";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart/" component={Cartz} />

          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
