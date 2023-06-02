'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Schedules.belongsTo(models.Unidades,
        {
          as: 'unit', // alias para la relacion 
          foreignKey: 'unitId', // pf en products
        });

         models.Schedules.belongsTo(models.Route,
          {
            as: 'route', // alias para la relacion 
            foreignKey: 'routeId', // pf en products
          }); 
    }



    
  }

  Schedule.init({
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El campo es obligatorio',
        },
      } 
    },
    unitId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El campo es obligatorio',
        },
      } 
    },
    routeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El campo es obligatorio',
        },
      } 
    } 
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};