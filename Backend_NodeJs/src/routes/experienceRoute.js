const experienceController = require('../controllers/experienceController');
const express = require('express');
const router = express.Router();

router.post('/',experienceController.experienceCreate);
router.get('/',experienceController.getAllExperience);