'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     Example:
     await queryInterface.bulkInsert('users', [{
       username: 'John Doe',
       email: 'johndoe@gmail.com',
       password: '123456789'
     },
    {
       username: 'Sebastián Ramírez',
       email: 'sebastianramirez0309@gmail.com',
       password: 'ramirezsolano'  
    },
    {
       username: 'Luisa Fernanda',
       email: 'lulo@gmail.com',
       password: 'luisa'
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
