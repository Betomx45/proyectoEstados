'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Schedules',
        'unitId',
        {
          type: Sequelize.DataTypes.INTEGER,
          // establecer la relacion a la tabla y llave primaria
          references: {
            model:'Unidades',
            key: 'id',
          },
           // integridad referencial 
           onUpdate: 'CASCADE',
           onDelete: 'SET NULL',
           defaultValue: null,
           after: 'hora',
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Schedules', 'unitId'),
    ]);
  }
};
