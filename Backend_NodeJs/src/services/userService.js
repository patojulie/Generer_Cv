const users = require('../models/utilisateur');

exports.getAllUsers = ()=> users.findAll();
exports.createUsers = (data)=>users.create(data);
exports.findUserById =(id)=>users.findByPk(id);
exports.updateUser = (id,data)=>users.findByIdAndUpdate(id,data,{new:true});