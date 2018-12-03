import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./LandingPage.less";

// ---------Redux---------
import { connect } from "react-redux";
import { updateCurrentPage } from "../../../actions/navigationActions";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";

// ----------React-CSS-Transition-Group-----------
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class LandingPage extends Component {
  updateCurrentPage = () => {
    this.props.updateCurrentPage("search");
  };

  render() {
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
              onClick={() => this.updateCurrentPage()}
            />
          </Link>
        </div>
      </ReactCSSTransitionGroup>
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
