const Sequelize = require('sequelize');

const db = require('../db/postgres');

const Persona = db.define('personas', {
    id_persona: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    dni: Sequelize.STRING,
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    email: Sequelize.STRING,
    sexo: Sequelize.STRING
})