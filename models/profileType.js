const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb://localhost/Personav_010" || { useNewUrlParser: true }
// );

const profileTypeSchema = new mongoose.Schema({
  profileTypeName: { type: String, required: true },
  img: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const ProfileType = mongoose.model("ProfileTypes", profileTypeSchema);
module.exports = ProfileType;
