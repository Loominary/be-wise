const express = require('express');
const router = express.Router();
const lm = require('../controllers/lecturers')

router.get      ("/", lm.getAllLecturers);

module.exports = router;