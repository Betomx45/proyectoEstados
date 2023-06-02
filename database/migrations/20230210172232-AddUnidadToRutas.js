'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Unidades',
        'rutaId',
        {
          type: Sequelize.DataTypes.INTEGER,
          //establecer la relación de la tabla y la llave primaria
          references: {
            model: 'Routes',
            key: 'id'
          },
          //integridad referencial
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          defaultValue: null,
          after: 'vigencialicencia'
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Unidades', 'rutaId')
    ]);
  }
};
