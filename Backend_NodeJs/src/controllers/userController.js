userService = require('../services/userService');

exports.usersCreate= async (req , res)=>{
    const newUser = await userService.createUsers(req.body);
    res.json(newUser);
}

exports.users=async(req,res)=>{
    const users = await userService.getAllUsers();
    res.json(users);
}