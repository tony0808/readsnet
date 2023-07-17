const authController = require('../controller/authController');
const router = require('express').Router();

router.get('/register', authController.renderRegisterPage);
router.get('/login', authController.renderLoginPage);

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;