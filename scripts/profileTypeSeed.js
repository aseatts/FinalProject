const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/persona_v010");

const ProfileTypeSchema = [
  {
    profileName: "Loosey Goosey"
  }
];

db.ProfileTypeSchema.deleteMany({})
  .then(() => db.ProfileTypeSchema.collection.insertMany(ProfileTypeSchema))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


  const profileNameSchema = [
    [
      {ProfileTypeName: "Professional"},
      {ProfileTypeName: "Spirtual"},
      {ProfileTypeName: "Artist"}
      {ProfileTypeName: "Parent"}
      {ProfileTypeName: "Student"}
      {ProfileTypeName: "Special"}
    ]
  ];
  
  db.profileNameSchema.deleteMany({})
    .then(() => db.profileNameSchema.collection.insertMany(profileNameSchema))
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  