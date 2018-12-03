import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import navigationReducer from "./navigationReducer";

export default combineReducers({
  patients: patientReducer,
  currentPage: navigationReducer
});
