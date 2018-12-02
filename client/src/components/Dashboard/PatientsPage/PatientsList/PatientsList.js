import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PatientsList.less";

// -----------Material UI------------
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

// ----------Components-----------
import Spinner from "../../../Common/Spinner/Spinner";

export default class PatientsList extends Component {
  render() {
    const { patients, pageNumber, loading } = this.props;
    let patientJSX,
      arraySliceStart = 0,
      arraySliceEnd = 10;

    // Depending on page number, updating start/end points of Patient Array slice
    if (pageNumber > 1) {
      arraySliceStart = pageNumber * 10 - 10;
      arraySliceEnd = pageNumber * 10;
    }

    // If user manually lands to /patients from URL, patients will load only after component renders. Therefore this check needs to be performed
    if (patients) {
      patientJSX = patients
        .slice(arraySliceStart, arraySliceEnd)
        .map(patient => {
          const patientData = patient.attributes;
          return (
            <ListItem
              key={patient.id}
              primaryText={`${patientData.firstName} ${patientData.lastName}`}
              secondaryText={`Room number: ${patientData.roomNumber}`}
              leftAvatar={<Avatar src={patientData.avatarUrl} />}
              rightIcon={
                <div className="severity-tooltip">
                  <span className="tooltiptext">Injury severity level</span>
                </div>
              }
            />
          );
        });
    }

    return (
      <div className="patients-list-container">
        <List>{loading ? <Spinner /> : patientJSX}</List>
      </div>
    );
  }
}

PatientsList.propTypes = {
  patients: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
