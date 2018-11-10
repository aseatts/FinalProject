const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/persona_v010");

const ProfileTypeSeed = [
  { ProfileTypeName: "Professional" },
  { ProfileTypeName: "Spirtual" },
  { ProfileTypeName: "Artist" },
  { ProfileTypeName: "Parent" },
  { ProfileTypeName: "Student" },
  { ProfileTypeName: "Special" }
];

db.remove({})
  .then(() => db.ProfileType.collection.insertMany(ProfileTypeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
