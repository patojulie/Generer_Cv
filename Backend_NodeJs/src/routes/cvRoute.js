const cvController = require('../controllers/cvController');
const express = require('express');
const router = express.Router();

router.post('/',cvController.cvCreate);
router.get('/',cvController.getAllCv);