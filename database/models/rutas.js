'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rutas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Rutas.belongsTo(models.Favoritos, {
        as: 'favs',
        foreignKey: 'favoritoId'
      });

    }

  }
  Rutas.init({
    unidad: DataTypes.STRING,
    origen: DataTypes.STRING,
    imageOrigen: DataTypes.STRING,
    destino: DataTypes.STRING,
    imageDestino: DataTypes.STRING,
    horaSalida: DataTypes.STRING,
    salidaAnterior: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rutas',
  });
  return Rutas;
};