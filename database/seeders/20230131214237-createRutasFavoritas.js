'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Favoritos', [
      {name: "Favoritos", description: "warning", createdAt: new Date(), updatedAt: new Date() },
      {name: "Todas", description: "light", createdAt: new Date(), updatedAt: new Date() },
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
