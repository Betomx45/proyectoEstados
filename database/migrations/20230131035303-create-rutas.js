'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // cuando se aplique la migracion a la BD
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rutas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Ruta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      origen: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      imageOrigen: {
        type: Sequelize.STRING(255),
      },
      destino: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      imageDestino: {
        type: Sequelize.STRING(255),
      },
      horaSalida: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      salidaAnterior: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // cuanoo se revierta la migracion 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rutas');
  }
};