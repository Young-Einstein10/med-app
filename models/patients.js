module.exports = (sequelize, Datatypes) => {
  const Patients = sequelize.define("Patients", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    address: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    age: {
      type: Datatypes.INTEGER,
    },
    sex: {
      type: Datatypes.STRING,
    },
    dob: {
      type: Datatypes.DATE,
    },
  });

  Patients.associate = (models) => {
    Patients.hasMany(models.Prescriptions, {
      foreignKey: "prs_id",
      as: "prescriptions",
    });
    // Patients.belongsTo(models.MedRecords, {
    //   foreignKey: "patient_id",
    //   onDelete: "CASCADE",
    // });
  };

  // Patients.associate = (models) => {
  //   Patients.belongsTo(models.MedRecords, {
  //     foreignKey: "patient_id",
  //     onDelete: "CASCADE"
  //   })
  // }

  return Patients;
};
