const { DataTypes, UUIDV4 } = require("sequelize");
const { Dog } = require("./Dog");
const { Temperament } = "./Temperament";
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog_temp",
    {
      dogId: {
        field: "dog_id",
        type: DataTypes.STRING,
        primaryKey: true,
        reference: { model: "dog", key: "id" },
        allowNull: false,
      },
      temperamentId: {
        field: "temp_id",
        type: DataTypes.INTEGER,
        reference: { model: "temperament", key: "id" },
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
