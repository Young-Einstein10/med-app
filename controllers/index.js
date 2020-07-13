const signup = require("./account").signup;
const signin = require("./account").signin;
const addPrescription = require("./prescriptions").addPrescription

module.exports = {
  signup,
  signin,
  addPrescription
};
