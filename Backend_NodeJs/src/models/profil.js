const {DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const profil = sequelize.define("profils",{
    titre:DataTypes.STRING,
    resume:DataTypes.STRING,
});
module.exports=profil;