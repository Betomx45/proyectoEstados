'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Unidades', [
      {numunidad: 1, placas: "847-YFP",  name: "Martin Castillo", phone: "2343556728", vigencialicencia: "2024", createdAt: new Date(), updatedAt: new Date() },
      {numunidad: 12, placas: "849-RTE", name: "Alejandro Nava", phone: "2343556734", vigencialicencia: "2024", createdAt: new Date(), updatedAt: new Date() },
      {numunidad: 10, placas: "566-GTF", name: "Jesus Mendoza", phone: "2343556724", vigencialicencia: "2024", createdAt: new Date(), updatedAt: new Date() },
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Unidades', null, {});
  }
};
