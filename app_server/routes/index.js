var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET about page. */ 
router.get('/about', ctrlMain.about);

/* GET contact page. */ 
router.get('/contact', ctrlMain.contact);


/* GET projects page. */ 
router.get('/projects', ctrlMain.projects);

module.exports = router;