const cvService = require('../services/cvServcice');

exports.cvCreate = async(req , res)=>{
    const newCv = await cvService.cvCreate(req.body);
    res.json(newCv);
}

exports.getAllCv = async(req ,res)=>{
    const cv = await cvService.getAllCv();
    res.json(cv);
}