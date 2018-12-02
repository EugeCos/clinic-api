import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.less";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";

// ----------React-CSS-Transition-Group-----------
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function LandingPage() {
  // Transition group effects
  const transitionOptions = {
    transitionName: "fade-effect",
    transitionAppear: true,
    transitionAppearTimeout: 200,
    transitionEnterTimeout: 200,
    transitionLeaveTimeout: 200
  };

  return (
    <ReactCSSTransitionGroup {...transitionOptions}>
      <div className="landing-container">
        <h1>Welcome to iWound</h1>
        <h2>A simple patient management platform</h2>
        <Link to="search">
          <RaisedButton
            label="Get Started"
            secondary={true}
            style={{ margin: "20px 0 10px" }}
            labelStyle={{ fontFamily: "Quattrocento Sans" }}
          />
        </Link>
      </div>
    </ReactCSSTransitionGroup>
  );
}
