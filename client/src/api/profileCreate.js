import axios from "axios";

const api = {
  profileCreate: function(CreatenewProfile) {
    return axios.post("/profileCreate", newProfile);
  }
};

export default api;
