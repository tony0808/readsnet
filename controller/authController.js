const ClientError = require('../customErrors/clientError');
const authServie = require('../service/authService');

function renderRegisterPage(req, res) {
    res.render('auth/register', {title:'Register'});
}

function renderLoginPage(req, res) {
    res.render('auth/login', {title:'Login'});
}

function registerUser(req, res) {
    try {
        const newUser = authServie.registerUserService(req, res);
        res.status(200).json({newUser});
    }
    catch(err) {
        if(err instanceof ClientError)  
            res.status(err.statusCode).json({err_msg:err.message});
        else 
            res.status(500).json({err_msg:'Server error while registering new user.'});
    }
}

function logoutUser(req, res) {

}

module.exports = {
    renderRegisterPage,
    renderLoginPage,
    registerUser,
    logoutUser
};

