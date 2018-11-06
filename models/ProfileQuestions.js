const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
  isSocialSafe: { type: boolean },
  isProfessionalSafe: { type: boolean },
  isAllProfilesSafe: { type: boolean },
  r_type: { type: String },
  createdDate: { type: Date, default: Date.now }
});

const profileQuestions = mongoose.model("profileQuestions", persona_v010);

module.exports = profileQuestions;
formValue;
