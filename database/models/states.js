'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.States.hasMany(models.Town,
        {
          as:"town",
          foreignkey:'stateId',
        }
      );
    }
  }
  States.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'States',
  });
  return States;
};