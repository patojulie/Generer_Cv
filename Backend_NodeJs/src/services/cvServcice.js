const cv = require('../models/cv');

exports.cvCreate = (data)=>cv.create(data);
exports.getAllCv = ()=>cv.findAll();
exports.deleteCv = (id)=>cv.findByIdAndDelete(id);