import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./PatientsPage.less";

// -----------Components------------
import PageHeader from "../../Common/PageHeader/PageHeader";
import PatientsList from "./PatientsList/PatientsList";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer";

// ---------Redux------------
import { connect } from "react-redux";

// ----------React-CSS-Transition-Group-----------
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class PatientsPage extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1
    };
  }

  navigateToAnotherPage = clickOption => {
    switch (clickOption) {
      case "previous":
        return this.setState({
          pageNumber: this.state.pageNumber - 1
        });
      case "next":
        return this.setState({
          pageNumber: this.state.pageNumber + 1
        });
      default:
        return;
    }
  };

  render() {
    const { pageNumber } = this.state;
    const { patients, loading } = this.props;

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
        <PageHeader pageText={"Patients List"} />
        <div className="patients-page-container">
          <div className="patients-page-header-wrapper">
            {/* Page number on the LEFT side */}
            <div>
              <h4>Page {pageNumber}</h4>
              <small>Max 10 patients per page</small>
            </div>

            {/* Buttons on the right side */}
            <div>
              <ButtonsContainer
                pageNumber={pageNumber}
                navigateToAnotherPage={this.navigateToAnotherPage}
              />
            </div>
          </div>

          <PatientsList
            patients={patients}
            pageNumber={pageNumber}
            loading={loading}
          />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

PatientsPage.propTypes = {
  patients: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  patients: state.patients.patientsList,
  loading: state.patients.loading
});

export default connect(mapStateToProps)(PatientsPage);
