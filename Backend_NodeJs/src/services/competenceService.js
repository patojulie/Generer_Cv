const competence =require('../models/competence');

exports.createCompetence = (data)=>competence.create(data);
exports.getAllCompetences = ()=>competence.findAll();