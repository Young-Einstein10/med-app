module.exports = (sequelize, Datatypes) => {
  const MedRecords = sequelize.define("Patients", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  MedRecords.associate = (models) => {
    MedRecords.hasMany(models.Patients, {
      foreignKey: "patient_id",
      as: "patients",
    });
  };

  return MedRecords;
};
