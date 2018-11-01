import axios from "axios";

const newProfile = {
  newProfile: function(newProfile) {
    return axios.post("/NewProfile", newProfile);
  }
};

export default newProfile;
