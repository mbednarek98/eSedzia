const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-s18579-sequelize', 'root', 'root', {
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    host: 'localhost'
});

module.exports = sequelize;