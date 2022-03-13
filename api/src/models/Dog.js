const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Minheight: {
      //   type: DataTypes.INTEGER,
      //   // allowNull: false,
      // },
      // Maxheight: {
      //   type: DataTypes.INTEGER,
      //   // allowNull: false,
      // },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Minweight: {
      //   type: DataTypes.INTEGER,
      //   // allowNull: false,
      // },
      // Maxweight: {
      //   type: DataTypes.INTEGER,
      //   // allowNull: false,
      // },
      lifespan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      temperament: {
        type: DataTypes.STRING,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
