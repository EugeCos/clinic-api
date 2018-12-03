import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./Dashboard.less";

// -----------Components-----------
import LandingPage from "./LandingPage/LandingPage";
import PatientsPage from "./PatientsPage/PatientsPage";
import SearchPage from "./SearchPage/SearchPage";
import PatientProfile from "./PatientsPage/PatientProfile/PatientProfile";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/patients" component={PatientsPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/patients/:patientId" component={PatientProfile} />
        </Switch>
      </div>
    );
  }
}
