'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'El email es obligatorio',
        },
        isEmail: {
          msg: 'Debe ingresar un email valido',
        }
      }
      },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'La contraseña es obligatorio',
        },
        len: {
          args: [8,255], 
          msg: 'La contraseña debe contener minimo 8 caracteres',
        }  
      }
    },  
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};