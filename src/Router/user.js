const router = require("express").Router();
const userController = require("../Controllers/userController");

router.get("/:id", userController.deleteId);
router.get("/", userController.getAllUser);

module.exports = router;
