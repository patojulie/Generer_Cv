const {DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const competence = sequelize.define("competences",{
    name:DataTypes.STRING,
    type:DataTypes.STRING,
    niveau:DataTypes.STRING,
});
module.exports = competence;