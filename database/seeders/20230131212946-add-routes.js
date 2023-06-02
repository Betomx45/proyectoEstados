'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Rutas', [
    {ruta: 1, origen: "Tilapa", imageOrigen: "https://admin.municipiospuebla.mx/sites/default/files/tilapa_alcaldia.jpg", destino: "Matamoros", imageDestino: "https://www.pueblosmexico.com.mx/IMG/arton27055.jpg", horaSalida: "12:00 p.m", salidaAnterior: "11:40 a.m", createdAt: new Date(), updatedAt: new Date() },
    {ruta: 1, origen: "Tilapa", imageOrigen: "https://admin.municipiospuebla.mx/sites/default/files/tilapa_alcaldia.jpg", destino: "Matamoros", imageDestino: "https://www.pueblosmexico.com.mx/IMG/arton27055.jpg", horaSalida: "04:00 p.m", salidaAnterior: "03:40 p.m", createdAt: new Date(), updatedAt: new Date() },
    {ruta: 1, origen: "Xuchapa", imageOrigen: "http://www.diariocambio.com.mx/2017/media/k2/items/cache/f74f70f80b1f7542c3400fd1192b7496_L.jpg?t=-62169984000", destino: "Matamoros", imageDestino: "https://www.pueblosmexico.com.mx/IMG/arton27055.jpg", horaSalida: "12:00 p.m", salidaAnterior: "11:40 a.m", createdAt: new Date(), updatedAt: new Date() },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Rutas', null, {});
  }
};
