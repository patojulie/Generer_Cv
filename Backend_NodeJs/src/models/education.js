const {DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const education = sequelize.define("educations",{
    diplome:DataTypes.STRING,
    institution:DataTypes.STRING,
    date_debut:DataTypes.DATE,
    date_fin:DataTypes.DATE
});

module.exports=education;