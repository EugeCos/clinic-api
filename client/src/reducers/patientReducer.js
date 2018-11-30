import { GET_ALL_PATIENTS } from "../actions/types";

const initialState = { patients: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PATIENTS:
      return {
        ...state,
        patients: action.payload
      };

    default:
      return state;
  }
}
