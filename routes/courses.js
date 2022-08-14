const express = require('express');
const router = express.Router();
const cm = require('../controllers/courses')

router.get      ("/", cm.getAllCourses);
router.get      ('/find', cm.findCourse);
router.get      ('/export', cm.exportCourses);

module.exports = router;