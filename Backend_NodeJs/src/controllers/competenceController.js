const competenceService  = require('../services/competenceService');

exports.competencesCreate = async(req ,res)=>{
    const newCompetence = await competenceService.createCompetence(req.body);
    res.json(newCompetence);
}

exports.getCompetences = async (req ,res)=>{
    const competences = await competenceService.getAllCompetences();
    res.json(competences);
} 