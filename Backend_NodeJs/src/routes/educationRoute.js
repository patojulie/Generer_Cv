const educationController = require('../controllers/educationController');
const express = require('express');
const router = express.Router();

router.post('/',educationController.educationCreate);
router.get('/',educationController.getAllEducation);