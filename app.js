const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const acctRoutes = require("./routes/account");
const prescriptionRoutes = require("./routes/prescriptions")

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require our routes into the application.
app.get("/", (req, res) =>
  res.status(200).send({
    message: "UNILAG MED API RUNNING.",
  })
);

// Account Signup and Login
app.use("/api/v1/auth/", acctRoutes);

// Getting and Modifying users
// app.use("/api/v1/user", userRoutes);
// Prescriptions
app.use("/api/v1/prescriptions", prescriptionRoutes)

module.exports = app;