'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('bootcamps', [{
       name: 'Ingles' ,
       description: 'curso basico de ingles',
       website: 'inglesbootcamp.com',
       phone: '8040774',
       avg_rating: 9,
       avg_cost: 2000000,
       user_id: 1
     },
     {
       name: 'Sociales' ,
       description: 'Intoducción a la historia de Colombia',
       website: 'socialesbootcamp.com',
       phone: '9811756',
       avg_rating: 8.5,
       avg_cost: 600000,
       user_id: 1
      },
      {
       name: 'Algebra' ,
       description: 'Curso básico de algebra',
       website: 'algebrabootcamp.com',
       phone: '1048223',
       avg_rating: 9,
       avg_cost: 1700000,
       user_id: 1
      }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {})
  }
};
