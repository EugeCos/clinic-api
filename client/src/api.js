import axios from "axios";

const patientsUrl = "/patients";

export default {
  getAllPatients: () => axios(patientsUrl)
};
