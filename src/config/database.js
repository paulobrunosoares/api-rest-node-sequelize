// Sequelize
const Sequelize = require('sequelize');
// database config
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  //logging: false, // disable logging
  storage: './database.sqlite',
});

module.exports = sequelize;