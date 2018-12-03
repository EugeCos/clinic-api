import {
  GET_ALL_PATIENTS,
  GET_WOUNDS_FOR_SELECTED_PATIENT,
  LOADING
} from "../actions/types";

const initialState = {
  patientsList: [],
  woundsForSelectedPatient: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PATIENTS:
      return {
        ...state,
        patientsList: action.payload,
        loading: false
      };
    case GET_WOUNDS_FOR_SELECTED_PATIENT:
      return {
        ...state,
        woundsForSelectedPatient: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
