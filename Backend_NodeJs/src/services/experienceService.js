const experience = require('../models/experience');

exports.experienceCreate = (data)=>experience.create(data);
exports.getAllExperience = ()=>experience.findAll();