const educationService = require('../services/educationService');

exports.educationCreate = async(req , res)=>{
    const newEducation = await educationService.educationCreate(req.body);
    res.json(newEducation);
}

exports.getAllEducation = async(req ,res)=>{
    const educations = await educationService.getAllEducation();
    res.json(educations);
}