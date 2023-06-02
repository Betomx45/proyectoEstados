'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Rutas',
        'favoritoId',
        {
          type: Sequelize.DataTypes.INTEGER,
          // establecer la relacion a la tabla y llave primaria
          references: {
            model: 'Favoritos',
            key: 'id',
          },
          // integridad referencial 
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          defaultValue: null,
          after: 'destino',
        },
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Rutas', 'favoritoId'),
    ]);
  }
};