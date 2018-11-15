import axios from "axios";

export default {
  // Gets all profiles
  getprofiles: function() {
    return axios.get("/api/profile");
  },
  // Gets the profile with the given id
  getprofile: function(id) {
    return axios.get("/api/profile/" + id);
  },
  // Deletes the profile with the given id
  deleteprofile: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a profile to the database
  saveprofile: function(profileData) {
    return axios.post("/api/profile/question", profileData);
  },
  getDewfaultProfileTypes: function() {
    return axios.get("/api/profile/d_profiletypes");
  },

  getAllProfileTypes: function() {
    return axios.get("/api/profile/");
  }
};
