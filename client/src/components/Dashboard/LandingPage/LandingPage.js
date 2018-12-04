import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./LandingPage.less";

// ---------Redux---------
import { connect } from "react-redux";
import { updateCurrentPage } from "../../../actions/navigationActions";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";

class LandingPage extends Component {
  updateCurrentPage = () => {
    this.props.updateCurrentPage("search");
  };

  render() {
    return (
      <div className="landing-container">
        <h1>Welcome to iWound</h1>
        <h3>A simple patient management platform</h3>
        <Link to="search">
          <RaisedButton
            label="Get Started"
            secondary={true}
            style={{ margin: "20px 0 10px" }}
            labelStyle={{ fontFamily: "Quattrocento Sans" }}
            onClick={() => this.updateCurrentPage()}
          />
        </Link>
      </div>
    );
  }
}

LandingPage.propTypes = {
  updateCurrentPage: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateCurrentPage }
)(LandingPage);
