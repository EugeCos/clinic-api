import axios from "axios";

const patientsUrl = "/patients";

export default {
  getListOfPatients: () => axios.get(patientsUrl),
  getPatientWounds: url => axios.get(url)
};
