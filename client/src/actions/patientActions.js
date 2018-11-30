import axios from "axios";
import { GET_ALL_PATIENTS } from "./types";

// Get all patients
export const getAllPatients = () => dispatch => {
  axios
    .get("/patients")
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
