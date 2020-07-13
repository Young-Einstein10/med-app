const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const auth = require("../middlewares/auth")
// const validator = require("../middleware/validate");

router.post("/", auth, controllers.addPrescription);

module.exports = router;
