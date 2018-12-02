import React, { Component, Fragment } from "react";
import "./PatientsPage.less";

// -----------Components------------
import PageHeader from "../../Common/PageHeader/PageHeader";
import PatientsList from "./PatientsList/PatientsList";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";

const buttonStyle = { margin: "0 20px", width: "180px" };

export default class PatientsPage extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1
    };
  }

  navigateToAnotherPage = clickOption => {
    switch (clickOption) {
      case "previous":
        this.setState({
          pageNumber: this.state.pageNumber - 1
        });
        break;
      case "next":
        this.setState({
          pageNumber: this.state.pageNumber + 1
        });
        break;
      default:
        return;
    }
  };

  render() {
    const { pageNumber } = this.state;
    const buttonsJSX =
      pageNumber > 1 ? (
        <Fragment>
          <RaisedButton
            label="Previous 10 patients"
            style={buttonStyle}
            secondary={true}
            labelStyle={{ fontFamily: "Quattrocento Sans" }}
            onClick={() => this.navigateToAnotherPage("previous")}
          />
          <RaisedButton
            label="Next 10 patients"
            style={buttonStyle}
            secondary={true}
            labelStyle={{ fontFamily: "Quattrocento Sans" }}
            onClick={() => this.navigateToAnotherPage("next")}
          />
        </Fragment>
      ) : (
        <RaisedButton
          label="Next 10 patients"
          style={buttonStyle}
          secondary={true}
          labelStyle={{ fontFamily: "Quattrocento Sans" }}
          onClick={() => this.navigateToAnotherPage("next")}
        />
      );
    return (
      <Fragment>
        <PageHeader pageText={"Patients List"} />
        <div className="patients-page-container">
          <div className="patients-page-header-wrapper">
            {/* Page number on the LEFT side */}
            <h4>Page {pageNumber}</h4>

            {/* Buttons on the right side */}
            <div className="patients-page-buttons-container">{buttonsJSX}</div>
          </div>

          <PatientsList />
        </div>
      </Fragment>
    );
  }
}
