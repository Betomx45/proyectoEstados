'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Town extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Town.belongsTo(models.States,
        {
          as:'states', //alias para la relacion
          foreignKey:'stateId',
        }
      );
    }
  }
  Town.init({
    name: DataTypes.STRING,
    stateId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Town',
  });
  return Town;
};