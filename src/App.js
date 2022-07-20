import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
// import Newsitem from './Component/Newsitem';
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}  key="general" pageSize={3} category="general" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress}  key="business" pageSize={3} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress}  key="entertainment" pageSize={3} category="entertainment" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress}  key="technology" pageSize={3} category="technology" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress}  key="sports" pageSize={3} category="sports" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress}  key="health" pageSize={3} category="health" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
