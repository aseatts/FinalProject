import axios from "axios";

const api = {
  profileCreate: function(profileType) {
    return axios.post("/profileCreate", profileType);
  }
};

export default api;
