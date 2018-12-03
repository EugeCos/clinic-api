import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./PatientProfile.less";
import moment from "moment";

// --------Material UI----------
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";

// ---------SVG icons---------
import RoomIcon from "./svg/hotel.svg";
import BedIcon from "./svg/bed.svg";
import Location from "./svg/location.svg";
import MedicalCross from "./svg/medical_cross.svg";
import Checkmark from "./svg/checkmark.svg";

// -----------Redux-------------
import { connect } from "react-redux";
import { getAllPatients, getWounds } from "../../../../actions/patientActions";

// ---------Components----------
import PageHeader from "../../../Common/PageHeader/PageHeader";

class PatientProfile extends Component {
  constructor() {
    super();
    this.state = {
      dialogOpen: false,
      clickedWoundImage: null
    };
  }

  componentWillMount() {
    // Scroll to top on component render
    window.scrollTo(0, 0);

    // Fetch wounds for selected patient
    const patientId = this.props.match.params.patientId;
    this.props.getWounds(patientId);

    // If user refreshes the page, call to the API has to be done from this component
    if (!this.props.patients.length) {
      this.props.getAllPatients();
    }
  }

  handleDialogOpen = woundId => {
    // Get image URL of clicked wound in order to feed it to the Modal
    let clickedWound = this.props.wounds.find(wound => wound.id === woundId);
    const clickedWoundImage = clickedWound.attributes.imageUrl;

    this.setState({ dialogOpen: true, clickedWoundImage });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false, clickedWoundImage: null });
  };

  render() {
    const patientId = this.props.match.params.patientId;
    const selectedPatient = this.props.patients[patientId - 1];

    return (
      <Fragment>
        <PageHeader pageText={"Patient Profile"} />
        <ProfileContainer>
          {this.props.patients.length ? (
            <Fragment>
              <PatientDetailsWrapper patient={selectedPatient} />
              <WoundsWrapper
                handleDialogOpen={this.handleDialogOpen}
                wounds={this.props.wounds}
              />
            </Fragment>
          ) : (
            ""
          )}
        </ProfileContainer>
        {/* Dialog window for enlarged wound picture */}
        <Dialog
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleDialogClose}
        >
          <img
            src={this.state.clickedWoundImage}
            alt="wound"
            style={{ width: "720px" }}
          />
        </Dialog>
        ;
      </Fragment>
    );
  }
}

PatientProfile.propTypes = {
  getAllPatients: PropTypes.func,
  getWounds: PropTypes.func.isRequired,
  patients: PropTypes.array.isRequired,
  wounds: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  patients: state.patients.patientsList,
  wounds: state.patients.woundsForSelectedPatient
});

export default connect(
  mapStateToProps,
  { getAllPatients, getWounds }
)(PatientProfile);

// Profile container
const ProfileContainer = ({ ...props }) => {
  const { children } = props;
  return <div className="profile-page-container">{children}</div>;
};

const PatientDetailsWrapper = ({ ...props }) => {
  const patient = props.patient.attributes;

  return (
    <div className="patient-details-wrapper">
      {/* Avatar */}
      <div className="patient-avatar-outline">
        <img src={patient.avatarUrl} alt="avatar" className="patient-avatar" />
      </div>
      <h3>{`${patient.firstName} ${patient.lastName}`}</h3>

      {/* Room and bed numbers */}
      <div className="room-bed-wrapper">
        <div className="icon-wrapper">
          <img src={RoomIcon} alt="" />
          <p>{patient.roomNumber}</p>
        </div>
        <div className="icon-wrapper">
          <img src={BedIcon} alt="" />
          <p>{patient.bedNumber}</p>
        </div>
      </div>

      <hr className="hr-styled" />

      <div className="dob-address-wrapper">
        <p>
          <span style={{ color: "grey" }}>Date of birth:&nbsp;</span>
          {moment(patient.dateOfBirth).format("MMMM D, YYYY")}
        </p>
        <div className="icon-wrapper">
          <img src={Location} alt="" />
          <p>{patient.address}</p>
        </div>
      </div>
      <i>Last updated on {moment(patient.updatedAt).format("MMMM D, YYYY")}</i>
    </div>
  );
};

const WoundsWrapper = ({ ...props }) => {
  const { handleDialogOpen, wounds } = props;
  const resolveButtonStyle = { margin: "15px 0 5px" };
  let woundCounter = 0;

  let woundsJSX = wounds.map(item => {
    woundCounter++;
    let wound = item.attributes;
    return (
      <Fragment key={item.id}>
        <div className="individual-wound-wrapper">
          {/* Wound number and injury status icon */}
          <div className="wound-number-wrapper">
            <div className="wound-number">{woundCounter}</div>
            <img
              src={wound.resolved ? Checkmark : MedicalCross}
              alt="injury-status"
              className="injury-status-icon"
            />
          </div>

          {/* Wound description */}
          <div className="wound-description-wrapper">
            <h3>
              <span>Type: </span>
              <strong>{wound.type}</strong>
            </h3>
            <h3>
              <span>Location: </span>
              <strong>{wound.bodyLocation}</strong>
            </h3>
            <h4>Acquired in house: {wound.inHouseAcquired}</h4>
          </div>

          {/* Wound status */}
          <div className="wound-status-wrapper">
            <h4>Wound status:</h4>
            <h4
              className={`wound-status-color ${
                wound.resolved ? "green" : "red"
              }`}
            >
              {wound.resolved ? "RESOLVED" : "ACTIVE"}
            </h4>
            {wound.resolved ? (
              ""
            ) : (
              <RaisedButton
                labelStyle={{ fontFamily: "Quattrocento Sans" }}
                label="Resolve"
                style={resolveButtonStyle}
              />
            )}
          </div>

          {/* Wound picture */}
          <div className="wound-picture-wrapper">
            <img
              src={wound.imageUrl}
              alt="wound"
              className="wound-picture"
              onClick={() => handleDialogOpen(item.id)}
            />
            <i>Wound visual (click to enlarge)</i>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="wounds-wrapper">
      <h3>WOUNDS HISTORY</h3>
      <hr className="hr-styled" />
      {woundsJSX}
    </div>
  );
};