const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Personav_010");

console.log(__dirname && __filename);
const app = express();
// Creates Http server

const PORT = process.env.PORT || 8080;

// const userRoutes = require("./routes/user.js");
// app.use(userRoutes);

// Matches with "/api/books"// Matches with "/api/books"

// app.get("/api/profile", function(req, res) {
//   ProfileType.profiletypes(ProfileTypes)
//     .findOne({})
//     .toArray(function(err, docs) {
//       if (err) {
//         handleError(res, err.message, "Failed to get contacts.");
//       } else {
//         res.status(200).json(docs);
//       }
//       console.log(res);
//     });
// });
app.use(routes);
app.use(express.urlencoded({ extended: true }));
// app.use =  HTML do something
app.use(express.json());
app.use(express.static("client/public"));

console.log;
app.listen(PORT, function() {
  console.log("Connected on PORT: " + PORT);
});
