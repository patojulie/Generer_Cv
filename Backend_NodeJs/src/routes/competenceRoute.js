const competenceController = require('../controllers/competenceController');
const express = require('express');
const router = express.Router();

router.post('/',competenceController.competencesCreate);
router.get('/',competenceController.getCompetences);