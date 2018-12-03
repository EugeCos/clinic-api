import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ---------Components----------
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
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
