const {DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const utilisateurs = sequelize.define("users",
    {
        name :DataTypes.STRING,
        email:DataTypes.STRING,
        phoneNumber:DataTypes.STRING,
        linkedIn:DataTypes.STRING,
        phoneURL:DataTypes.STRING
    }
);
module.exports = utilisateurs;