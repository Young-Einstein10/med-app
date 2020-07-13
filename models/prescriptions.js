module.exports = (sequelize, Datatypes) => {
  const Prescriptions = sequelize.define("Prescriptions", {
    duration: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    no_of_times_per_day: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    time_for_prescription: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  Prescriptions.associate = (models) => {
    Prescriptions.belongsTo(models.Patients, {
      foreignKey: "prs_id",
      onDelete: "CASCADE",
    });
    Prescriptions.hasMany(models.Drugs, {
      foreignKey: "drug_id",
      as: "drugs",
    });
  };

  return Prescriptions;
};
