const router = require("express").Router();
const passport = require("passport");
const authController = require("../Controllers/authController");

router.post("/register", authController.register);
router.post("/logout", authController.logout);
router.post("/login", authController.login);

module.exports = router;
