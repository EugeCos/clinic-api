import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./SearchPage.less";
import PatientIcon from "./svg/patient.svg";

// ----------Redux------------
import { connect } from "react-redux";
import { getAllPatients } from "../../../actions/patientActions";

// -----------Material UI-----------
import TextField from "material-ui/TextField";

// -----------Components------------
import PageHeader from "../../Common/PageHeader/PageHeader";
import PatientsList from "../PatientsPage/PatientsList/PatientsList";

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      filteredPatientsList: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    // Scroll to top on component render
    window.scrollTo(0, 0);

    this.props.getAllPatients();
  }

  handleChange = e => {
    this.setState(
      {
        searchValue: e.target.value
      },
      () => this.searchPatient()
    );
  };

  // Search and display patients based on search input (first or last name)
  searchPatient = () => {
    const { searchValue } = this.state;
    const { patients } = this.props;
    let suggestions = [];
    if (searchValue.length > 0 && patients.length > 0) {
      // Filter by first name
      patients.reduce((a, e, i) => {
        if (
          searchValue.toUpperCase() ===
          e.attributes.firstName.substr(0, searchValue.length).toUpperCase()
        ) {
          suggestions.push(e);
        }
        return suggestions;
      });

      // Filter by last name
      patients.reduce((a, e, i) => {
        if (
          searchValue.toUpperCase() ===
          e.attributes.lastName.substr(0, searchValue.length).toUpperCase()
        ) {
          suggestions.push(e);
        }
        return suggestions;
      });

      // Filter out patients whose last name starts with the same letter as their first name
      suggestions = suggestions.filter(
        (patient, index, self) =>
          self.findIndex(
            t => t.attributes.lastName === patient.attributes.lastName
          ) === index
      );
    }

    this.setState({
      filteredPatientsList: suggestions
    });
  };

  render() {
    const { searchValue, filteredPatientsList } = this.state;
    const { loading } = this.props;

    return (
      <Fragment>
        <PageHeader pageText={"Search"} />
        <div className="search-page-container">
          <div className="search-field-wrapper">
            <h4>Search for patients</h4>
            <TextField
              hintText="First or last name"
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>

          {filteredPatientsList.length > 0 ? (
            <PatientsList
              patients={filteredPatientsList}
              pageNumber={1} // not needed for Search Page but passed anyway so that PropTypes don't complain
              loading={loading} // not needed for Search Page but passed anyway so that PropTypes don't complain
            />
          ) : (
            <div className="empty-search-container">
              <img src={PatientIcon} alt="patient" className="patient-icon" />
              <h2>Search list is empty</h2>
              <h3>Start typing first or last name to find a patient</h3>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

SearchPage.propTypes = {
  patients: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getAllPatients: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  patients: state.patients.patientsList,
  loading: state.patients.loading
});

export default connect(
  mapStateToProps,
  { getAllPatients }
)(SearchPage);
