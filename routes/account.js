const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
// const validator = require("../middleware/validate");

router.post("/create", controllers.signup);
router.post("/signin", controllers.signin);

module.exports = router;
