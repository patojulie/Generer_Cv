const profil = require('../models/profil');

exports.profilCreate = (data)=>profil.create(data);
exports.getAllProfil = ()=>profil.findAll();