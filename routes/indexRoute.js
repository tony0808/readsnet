const indexController = require('../controller/indexController');
const router = require('express').Router();

router.get('/', indexController.renderIndexPage);

module.exports = router;