const profilController = require('../controllers/profilController');
const express = require('express');
const router = express.Router();

router.post('/',profilController.profilCreate);
router.get('/',profilController.getAllProfil);