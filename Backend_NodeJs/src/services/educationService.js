const education = require('../models/education');

exports.educationCreate = (data)=>education.create(data);
exports.getAllEducation = ()=>education.findAll();