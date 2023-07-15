const authController = require('../controller/authController');
const router = require('express').Router();

router.get('/register', authController.renderRegisterPage);
router.get('/login', authController.renderLoginPage);

module.exports = router;