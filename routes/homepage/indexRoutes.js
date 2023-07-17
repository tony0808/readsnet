const homeIndexController = require('../../controller/homepage/indexController');
const router = require('express').Router();

router.get('/', homeIndexController.renderHomeIndexPage);
router.get('/logout', homeIndexController.logoutUser);

module.exports = router;