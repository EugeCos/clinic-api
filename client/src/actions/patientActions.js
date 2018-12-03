import api from "../api";
import {
  GET_ALL_PATIENTS,
  GET_WOUNDS_FOR_SELECTED_PATIENT,
  LOADING
} from "./types";

// Get all patients
export const getAllPatients = () => dispatch => {
  dispatch(setLoading());
  api
    .getListOfPatients()
    .then(res =>
      dispatch({
        type: GET_ALL_PATIENTS,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_PATIENTS,
        payload: []
      })
    );
};

// Patients loading
export const setLoading = () => {
  return {
    type: LOADING
  };
};

// Get list of wound for a selected patient
export const getWounds = patientId => dispatch => {
  dispatch(setLoading());
  api
    .getPatientWounds(`/patients/${patientId}/wounds`)
    .then(res =>
      dispatch({
        type: GET_WOUNDS_FOR_SELECTED_PATIENT,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_WOUNDS_FOR_SELECTED_PATIENT,
        payload: []
      })
    );
};
