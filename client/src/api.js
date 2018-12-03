import axios from "axios";

const patientsUrl = "/patients";

export default {
  getListOfPatientsAPI: () => axios.get(patientsUrl),
  getPatientWoundsAPI: url => axios.get(url)
};
