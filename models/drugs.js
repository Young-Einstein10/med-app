module.exports = (sequelize, Datatypes) => {
  const Drugs = sequelize.define("Drugs", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    m_date: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    exp_date: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    price: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  Drugs.associate = (models) => {
    Drugs.belongsTo(models.Prescriptions, {
      foreignKey: "drug_id",
      onDelete: "CASCADE",
    });
  };

  return Drugs;
};
