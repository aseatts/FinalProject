const router = require("express").Router();
const profileRoutes = require("./profile");

router.use("/api/profile", profileRoutes);

module.exports = router;
