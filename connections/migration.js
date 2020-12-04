const dotenv = require('dotenv');

if (dotenv.config({
  path: `env/${process.env.NODE_ENV}.env`
}).error) {
throw new Error(`Verify that .env file exists in the env folder`);
}

const {dialect} = require('../config/mysql')[process.env.NODE_ENV];

module.exports = {
  development: {
    database: process.env.DBAAS_MYSQL_DATABASE,
    username: process.env.DBAAS_MYSQL_USER,
    password: process.env.DBAAS_MYSQL_PASSWORD,
    host: process.env.DBAAS_MYSQL_HOSTS,
    dialect: dialect
  },
  test: {
    database: process.env.DBAAS_MYSQL_DATABASE,
    username: process.env.DBAAS_MYSQL_USER,
    password: process.env.DBAAS_MYSQL_PASSWORD,
    host: process.env.DBAAS_MYSQL_HOSTS,
    dialect: dialect
  },
  staging: {
    database: process.env.DBAAS_MYSQL_DATABASE,
    username: process.env.DBAAS_MYSQL_USER,
    password: process.env.DBAAS_MYSQL_PASSWORD,
    host: process.env.DBAAS_MYSQL_HOSTS,
    dialect: dialect
  },
  production: {
    database: process.env.DBAAS_MYSQL_DATABASE,
    username: process.env.DBAAS_MYSQL_USER,
    password: process.env.DBAAS_MYSQL_PASSWORD,
    host: process.env.DBAAS_MYSQL_HOSTS,
    dialect: dialect
  }
};