import { GET_ALL_PATIENTS, PATIENTS_LOADING } from "../actions/types";

const initialState = { patientsList: null, loading: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PATIENTS:
      return {
        ...state,
        patientsList: action.payload,
        loading: false
      };
    case PATIENTS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
