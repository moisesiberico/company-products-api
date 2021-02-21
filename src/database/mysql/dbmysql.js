'use strict'
const config    = require('./config');
const Sequelize = require('sequelize');

//------------------------------------
// Modelo de datos de la base de datos

const FilmModel = require('./models/films');
const UserModel = require('./models/users');

const sequelize = new Sequelize(config.dbname,config.dblogin,config.dbpassword,{
    host   : config.dbhost,
    dialect: config.dbdialect
});

const Film  = FilmModel(sequelize,Sequelize);
const User  = UserModel(sequelize,Sequelize);

sequelize.sync({ force : false})
    .then(() => {
        console.log('Tablas sincronizadas..!')
    })

module.exports = {
    Film,
    User
} 
 