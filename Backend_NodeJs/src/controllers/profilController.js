const profilService = require('../services/profilService');

exports.profilCreate = async(req , res)=>{
    const newProfil= await profilService.profilCreate(req.body);
    res.json(newProfil);
}

exports.getAllProfil = async(req ,res)=>{
    const profil = await profilService.getAllProfil();
    res.json(profil);
}