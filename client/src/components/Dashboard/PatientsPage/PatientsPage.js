import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./PatientsPage.less";

// -----------Components------------
import PageHeader from "../../Common/PageHeader/PageHeader";
import PatientsList from "./PatientsList/PatientsList";
import ButtonsContainer from "./ButtonsContainer/ButtonsContainer";

// ---------Redux------------
import { connect } from "react-redux";
import {
  getAllPatients,
  clearWoundsList
} from "../../../actions/patientActions";

class PatientsPage extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.props.getAllPatients();
    this.props.clearWoundsList();
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

    return (
      <Fragment>
        <PageHeader pageText={"Patients List"} />
        <div className="patients-page-container">
          <div className="patients-page-header-wrapper">
            {/* Page number on the LEFT side */}
            <div>
              <h4>Page {pageNumber}</h4>
              <small>10 patients per page</small>
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
      </Fragment>
    );
  }
}

PatientsPage.propTypes = {
  patients: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getAllPatients: PropTypes.func.isRequired,
  clearWoundsList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  patients: state.patients.patientsList,
  loading: state.patients.loading
});

export default connect(
  mapStateToProps,
  { getAllPatients, clearWoundsList }
)(PatientsPage);
