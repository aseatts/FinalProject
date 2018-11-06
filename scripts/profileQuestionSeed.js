const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/persona_v010");

const ProfileQuestionSeed = [
  {
    label: "FreeTime Hobby",
    value: "FreeTime Hobby",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "default(50 char)"
  },
  {
    label: "Astrological Sign",
    value: "Astrological Sign",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "list{}"
  },
  {
    label: "AnonEmail",
    value: "AnonEmail",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "default(255 char)"
  },
  {
    label: "Current Obession",
    value: "Current Obession",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Cats are …",
    value: "Cats are …",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Dogs are …",
    value: "Dogs are …",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Cows are …",
    value: "Cows are …",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Tofu…",
    value: "Tofo…",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Top 2 Favorite Movies",
    value: "Top 2 Favorite Movies",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 Favorite songs",
    value: "Top 2 Favorite songs",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 favorite places",
    value: "Top 2 favorite places",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 ways to stay Active",
    value: "Top 2 ways to stay Active",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 things that keep you sane",
    value: "Top 2 things that keep you sane",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Game of Thrones",
    value: "Game of Thrones is...",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "The Kardashians",
    value: "The Kardashians",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Kimye is",
    value: "Kimye is",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "SSDL"
  },
  {
    label: "Top 2 ways to stay active",
    value: "Top 2 ways to stay active",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Top 2 Favorite forms of Art",
    value: "Top 2 Favorite forms of Art",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "2responseboxes"
  },
  {
    label: "Favorite Art Venue",
    value: "Favorite Art Venue",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "default(255 char)"
  },
  {
    label: "Favorite New Artist",
    value: "Favorite New Artist",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { FALSE },
    isAllProfilesSave: { FALSE },
    r_type: "default(255 char)"
  },
  {
    label: "Current Genre Style Obession",
    value: "Current Genre Style Obession",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(50 char)"
  },
  {
    label: "What do you do professionally",
    value: "What do you do professionally",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(50 char)"
  },
  {
    label: "What do you want to do professionally?",
    value: "What do you want to do professionally?",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(255 char)"
  },
  {
    label: "What are you studying?",
    value: "What are you studying?",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(50 char)"
  },
  {
    label: "What are you reading?",
    value: "What are you reading?",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(50 char)"
  },
  {
    label: "Most Recent Project",
    value: "Most Recent Project",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(255 char) multiline"
  },
  {
    label: "Next Big Thing",
    value: "What is the next big thing?",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "default(50 char)"
  },
  {
    label: "LinkedIn Profile",
    value: "LinkedIn Profile",
    isSocialSafe: { FALSE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { FALSE },
    r_type: "URL"
  },
  {
    label: "PersonalWebsiteURL",
    value: "Personal Website URL",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Yelp Reviews",
    value: "Yelp Reviews URL",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Amazon Wish List",
    value: "Amazon Wish List",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Alias Name",
    value: "Alias Name",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Facebook Profile",
    value: "Facebook Profile",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Spotify",
    value: "Instagram ",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Instagram ",
    value: "Spotify",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  },
  {
    label: "Snapchat",
    value: "Snapvalue",
    isSocialSafe: { TRUE },
    isProfessionalSafe: { TRUE },
    isAllProfilesSave: { TRUE },
    r_type: "URL"
  }
];

db.persona_v010
  .remove({})
  .then(() => db.persona_v010.collection.insertMany(ProfileQuestionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
