import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.less";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";

export default function LandingPage() {
  return (
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
  );
}
