'use strict';
import bcrypt from "bcrypt"
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El nombre es obligatorio',
        },
        is: {
          args: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          msg: 'El nombre debe contener sólo texto.',
        },
      },
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Este campo es obligatorio',
        },
        isEmail: {
          msg: 'Debe ingresar un email valido',
        }
      }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Este campo es obligatorio',
        },
        len: {
          args: [8, 255],
          msg: 'La contraseña debe contener minimo 8 caracteres',
        }
      },
    },
    passwordResetToken: DataTypes.STRING(128),
    passwordResetExpire: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Usuarios',
  });

  Usuarios.prototype.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }

  return Usuarios;
};