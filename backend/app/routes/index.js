var express = require('express');
var controllerIndex = require('../controllers/index')
var router = express.Router();

/* GET home page. */
router.get('/', controllerIndex.home)

module.exports = router;
