const {DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const experience = sequelize.define("experience",{
    poste:DataTypes.STRING,
    entreprise:DataTypes.STRING,
    date_debut:DataTypes.DATE,
    date_fin:DataTypes.DATE,
    description:DataTypes.STRING,
});

module.exports=experience;