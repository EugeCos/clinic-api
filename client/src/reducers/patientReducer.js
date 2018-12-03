import {
  GET_ALL_PATIENTS,
  GET_WOUNDS_FOR_SELECTED_PATIENT,
  CLEAR_WOUNDS_LIST,
  RESOLVE_WOUND,
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
    case CLEAR_WOUNDS_LIST:
      return {
        ...state,
        woundsForSelectedPatient: action.payload
      };
    case RESOLVE_WOUND:
      return {
        ...state,
        woundsForSelectedPatient: state.woundsForSelectedPatient.map(wound =>
          wound.id === action.payload.id ? action.payload : wound
        )
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
