const sequelize = require('../configs/db');

const users = require('./utilisateur');
const competence = require('./competence');
const cv = require('./cv');
const education =  require('./education');
const experience = require('./experience');
const profil = require('./profil');

users.hasMany(profil,{foreignKey:'userId'});
profil.belongsTo(users,{foreignKey:'userId'});

users.hasMany(experience,{foreignKey:'userId'});
experience.belongsTo(users,{foreignKey:'userId'});

users.hasMany(education,{foreignKey:'userId'});
education.belongsTo(users,{foreignKey:'userId'});

users.hasMany(competence,{foreignKey:'userId'});
competence.belongsTo(users,{foreignKey:'userId'});

users.hasMany(cv,{foreignKey:'userId'});
cv.belongsTo(users,{foreignKey:'userId'});

module.exports ={
    sequelize,
    users,
    education,
    profil,
    cv,
    experience,
    competence,
}