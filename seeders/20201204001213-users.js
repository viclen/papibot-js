'use strict';

const userFactory = require('../factories/User');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [{
      name: 'Admin',
      email: 'admin@papillonc.com.br',
      password: 'admin',
      key: '',
    }];

    for (let i = 0; i < 10; i++) {
      users.push(userFactory());
    }

    return queryInterface.bulkInsert('User', users);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.truncate('User');
  }
};
