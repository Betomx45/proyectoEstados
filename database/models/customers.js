'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customers.hasOne(models.Adress,
        {
          as:"adress",
          foreignkey:'adressId',
        }
        );
    }
  }
  Customers.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    rfc: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};