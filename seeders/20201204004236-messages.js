'use strict';

const messageFactory = require('../factories/Message');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const messages = [];

    for (let i = 0; i < 50; i++) {
      messages.push(messageFactory());
    }

    return queryInterface.bulkInsert('Message', messages);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.truncate('Message');
  }
};
