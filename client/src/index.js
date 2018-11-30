import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// ----------MATERIAL UI-----------
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

/*-------------FONT-AWESOME-------------*/
import "../node_modules/font-awesome/css/font-awesome.min.css";

// --------------REDUX--------------
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
