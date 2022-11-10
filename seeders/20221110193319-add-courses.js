'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      title: 'Pronunciación',
      description: 'Curso básico de pronunciación en inglés',
      weeks: 12,
      enroll_cost: 1000000,
      minimum_skill: 'basico',
      bootcamp_id: 1
    },
   {
      title: 'Escritura',
      description: 'Curso básico de escritura en inglés',
      weeks: 8,
      enroll_cost: 1000000,
      minimum_skill: 'basico',
      bootcamp_id: 1
   },
   {
      title: 'Introduccion',
      description: 'Introducción a la algebra de baldor',
      weeks: 4,
      enroll_cost: 800000,
      minimum_skill: 'basico',
      bootcamp_id: 3
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
