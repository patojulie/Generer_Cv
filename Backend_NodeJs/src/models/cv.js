const {DataTypes}=require('sequelize');
const sequelize = require('../configs/db');

const cv = sequelize.define("cv",{
    contenu:DataTypes.STRING,
    date_creation:DataTypes.DATE,
    titre_version:DataTypes.STRING
});

module.exports=cv;