const experienceService = require('../services/experienceService');

exports.experienceCreate = async(req , res)=>{
    const newExperience = await experienceService.experienceCreate(req.body);
    res.json(newExperience);
}

exports.getAllExperience = async(req ,res)=>{
    const experience = await experienceService.getAllExperience();
    res.json(experience);
}