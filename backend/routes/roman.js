const express = require('express');
const router = express.Router();
const romanController = require('../controllers/romanController');

router.get('/', romanController.convertToRomans);

module.exports = router;
