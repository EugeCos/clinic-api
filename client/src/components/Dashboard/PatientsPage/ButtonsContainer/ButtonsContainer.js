import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./ButtonsContainer.less";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";

const ButtonsContainer = ({ pageNumber, navigateToAnotherPage }) => {
  const buttonStyle = { margin: "0 20px", width: "180px" };
  switch (pageNumber) {
    case 1:
      return (
        <RaisedButton
          label="Next 10 patients"
          style={buttonStyle}
          secondary={true}
          labelStyle={{ fontFamily: "Quattrocento Sans" }}
          onClick={() => navigateToAnotherPage("next")}
        />
      );

    case 5:
      return (
        <RaisedButton
          label="Previous 10 patients"
          style={buttonStyle}
          secondary={true}
          labelStyle={{ fontFamily: "Quattrocento Sans" }}
          onClick={() => navigateToAnotherPage("previous")}
        />
      );
    default:
      return (
        <Fragment>
          <RaisedButton
            label="Previous 10 patients"
            style={buttonStyle}
            secondary={true}
            labelStyle={{ fontFamily: "Quattrocento Sans" }}
            onClick={() => navigateToAnotherPage("previous")}
          />
          <RaisedButton
            label="Next 10 patients"
            style={buttonStyle}
            secondary={true}
            labelStyle={{ fontFamily: "Quattrocento Sans" }}
            onClick={() => navigateToAnotherPage("next")}
          />
        </Fragment>
      );
  }
};

ButtonsContainer.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  navigateToAnotherPage: PropTypes.func.isRequired
};

export default ButtonsContainer;
