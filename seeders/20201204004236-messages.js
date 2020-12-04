'use strict';

const messageFactory = require('../factories/Message');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const messages = [];

    for (let i = 0; i < 100; i++) {
      messages.push(messageFactory());
    }

    queryInterface.bulkInsert('Message', messages);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.truncate('Message');
  }
};
