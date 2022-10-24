const router = require("express").Router();
const userController = require("../Controllers/userController");
const middleWareController = require("../Controllers/middleWareController");
router.get("/:id", userController.deleteId);
router.get("/", middleWareController.verifyToken, userController.getAllUser);

module.exports = router;
