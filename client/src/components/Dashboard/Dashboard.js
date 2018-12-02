import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./Dashboard.less";

// -----------Components-----------
import LandingPage from "./LandingPage/LandingPage";
import PatientsPage from "./PatientsPage/PatientsPage";
import SearchPage from "./SearchPage/SearchPage";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/patients" component={PatientsPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    );
  }
}
