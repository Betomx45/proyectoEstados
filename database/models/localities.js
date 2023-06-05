'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Localities.belongsTo(models.Town,
        {
          as:'towns', //alias para la relacion
          foreignKey:'townId',
        }
      );

      models.Localities.hasMany(models.Adress,
        {
          as:'adress', //alias para la relacion
          foreignKey:'localityId',
        }
      );
    }
  }
  Localities.init({
    name: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    townId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Localities',
  });
  return Localities;
};