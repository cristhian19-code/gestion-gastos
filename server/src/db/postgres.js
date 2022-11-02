const Sequelize = require('sequelize');

const sequelize = new Sequelize('Capacitacion','postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    operatorAliases: false,
    define: {
        tipestamp: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = sequelize;