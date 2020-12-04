const database = require('../config/mysql')[process.env.NODE_ENV];
const dotenv = require('dotenv');

if (dotenv.config({
    path: `env/${process.env.NODE_ENV}.env`
}).error) {
    throw new Error(`Verify that .env file exists in the env folder`);
}

database.database = process.env.DBAAS_MYSQL_DATABASE
database.username = process.env.DBAAS_MYSQL_USER
database.password = process.env.DBAAS_MYSQL_PASSWORD
database.host = process.env.DBAAS_MYSQL_HOSTS
database.port = process.env.DBAAS_MYSQL_PORT

const Sequelize = require('sequelize');
const sequelize = new Sequelize(database);

module.exports = sequelize;