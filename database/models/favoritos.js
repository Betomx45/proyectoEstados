'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favoritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Favoritos.hasMany(models.Rutas, 
        {
          as: 'rutas',
          foreignKey: 'favoritoId'
        });
    }
  }
  Favoritos.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Favoritos',
  });
  return Favoritos;
};