'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Route.hasMany(models.Unidades,
        {
          as: 'unidad',
          foreignKey: 'rutaId'
        });
    }

     static associate(models) {
      // define association here
      models.Route.hasMany(models.Schedules,
        {
          as: 'unidades',
          foreignKey: 'routeId'
        });
    } 
  }
  Route.init({
    origen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El origen es obligatorio",
        },
        is: {
          args: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          msg: 'El origen debe contener sólo texto.',
        },
      }
    },
    imageOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La imagen es obligatoria",
        }
      }
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El destino es obligatorio",
        },
        is: {
          args: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          msg: 'El destino debe contener sólo texto.',
        },
      }
    },
    imageDestino: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La imagen es obligatoria",
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};