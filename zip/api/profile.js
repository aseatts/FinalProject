const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/").get(profileController.getAllProfileTypes);

module.exports = router;
