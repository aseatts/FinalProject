const router = require("express").Router();
const profileController = require("../../controllers/profileController");
// Matches with "/api/books"// Matches with "/api/books"
ProfileRoute = router.get("/api/profile", profileController.getAllProfileTypes);
// .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = ProfileRoute;
