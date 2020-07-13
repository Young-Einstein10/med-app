const { Prescriptions } = require("../models");

const addPrescription = async (req, res) => {
  try {
    const { duration, no_of_times_per_day, time_for_prescription } = req.body 
    const prescription = await Prescriptions.create({
      duration, no_of_times_per_day, time_for_prescription
    })   
    res.status(201).json({
      status: "sucsess",
      data: prescription
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error
    })
  }
}

// const getPrescriptions = async (req, res) => {
//   try {
//     const prescriptions = await Prescriptions.findAll()
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//       error
//     })
//   }
// }

module.exports = { addPrescription }