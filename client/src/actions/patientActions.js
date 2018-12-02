import api from "../api";
import { GET_ALL_PATIENTS, PATIENTS_LOADING } from "./types";

// Get all patients
export const getAllPatients = () => dispatch => {
  dispatch(setPatientsLoading());
  api
    .getAllPatients()
    .then(res =>
      dispatch({
        type: GET_ALL_PATIENTS,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_PATIENTS,
        payload: {}
      })
    );
};

// Patients loading
export const setPatientsLoading = () => {
  return {
    type: PATIENTS_LOADING
  };
};
