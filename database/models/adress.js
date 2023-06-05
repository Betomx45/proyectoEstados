'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Adress.belongsTo(models.Customers,
        {
          as:'customer', //alias para la relacion
          foreignKey:'adressId',
        }
      );

      models.Adress.belongsTo(models.Localities,
        {
          as:"locality",
          //foreignkey:'localityId',
        }
        );
    }
  }
  Adress.init({
    street: DataTypes.STRING,
    numberA: DataTypes.STRING,
    numberB: DataTypes.STRING,
    adressId: DataTypes.INTEGER,
    localityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};