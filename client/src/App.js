import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ----------REDUX----------
import { store } from "./store";
import { getAllPatients } from "./actions/patientActions";

// ---------COMPONENTS----------
import Body from "./components/Body/Body";

class App extends Component {
  componentDidMount() {
    store.dispatch(getAllPatients());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="fa fa-fighter-jet" />
          <h1 className="App-title">Wound Central</h1>
        </header>
        <Body />
      </div>
    );
  }
}

export default App;
