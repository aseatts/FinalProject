const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://localhost/Personav_010" || { useNewUrlParser: true }
);

const questionSchema = new mongoose.Schema({
  value: { type: String },
  label: { type: String },
  isSocialSafe: { type: Boolean },
  isProfessionalSafe: { type: Boolean },
  isAllProfilesSafe: { type: Boolean },
  r_type: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const profileQuestions = mongoose.model("profileQuestions", questionSchema);
module.exports = profileQuestions;

const profileNameSchema = new mongoose.Schema({
  profileName: { type: String, required: true },
  userid: { type: Schema.Types.ObjectId },
  createdDate: { type: Date, default: Date.now }
});

module.exports = profileNameSchema;

const ProfileTypeSchema = new mongoose.Schema({
  ProfileTypeName: { type: String, required: true },
  img: { type: String },
  createdDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model("ProfileType", ProfileTypeSchema);
