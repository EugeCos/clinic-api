import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ----------Redux----------
import { store } from "./store";
import { getAllPatients } from "./actions/patientActions";

// ---------Components----------
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  componentDidMount() {
    store.dispatch(getAllPatients());
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
