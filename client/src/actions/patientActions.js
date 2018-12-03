import api from "../api";
import axios from "axios";
import {
  GET_ALL_PATIENTS,
  GET_WOUNDS_FOR_SELECTED_PATIENT,
  CLEAR_WOUNDS_LIST,
  RESOLVE_WOUND,
  LOADING
} from "./types";

// Get all patients
export const getAllPatients = () => dispatch => {
  dispatch(setLoading());
  api
    .getListOfPatientsAPI()
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
    .getPatientWoundsAPI(`/patients/${patientId}/wounds`)
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

export const resolveWound = woundId => dispatch => {
  const woundData = {
    data: {
      type: "wounds",
      id: woundId,
      attributes: {
        resolved: true
      }
    }
  };

  axios({
    method: "patch",
    url: `/wounds/${woundId}`,
    data: woundData
  })
    .then(res =>
      dispatch({
        type: RESOLVE_WOUND,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Clear list of wounds
export const clearWoundsList = () => dispatch => {
  dispatch({ type: CLEAR_WOUNDS_LIST, payload: [] });
};
